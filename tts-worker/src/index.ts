// Edge TTS Cloudflare Worker — proxy for Microsoft Edge TTS
// Connects via WebSocket to Microsoft's speech service

interface Env {
  ALLOWED_ORIGIN: string;
}

const TRUSTED_CLIENT_IP = "0.0.0.0";
const SYNTH_URL = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";

function generateRequestId(): string {
  return crypto.randomUUID().replace(/-/g, "");
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSSML(text: string, voice: string, rate: string = "+0%", pitch: string = "+0Hz"): string {
  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
    `<voice name='${voice}'>` +
    `<prosody rate='${rate}' pitch='${pitch}'>` +
    escapeXml(text) +
    `</prosody></voice></speak>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders: Record<string, string> = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Also allow localhost for dev
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      corsHeaders["Access-Control-Allow-Origin"] = origin;
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const { text, lang } = await request.json() as { text?: string; lang?: string };

      if (!text || typeof text !== "string" || text.length > 2000) {
        return new Response(JSON.stringify({ error: "Invalid text (max 2000 chars)" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const voice = lang === "en" ? "en-US-AriaNeural" : "zh-CN-XiaoxiaoNeural";
      const requestId = generateRequestId();
      const outputFormat = "audio-24khz-48kbitrate-mono-mp3";

      const wsUrl = `${SYNTH_URL}?TrustedClientToken=${TRUSTED_CLIENT_IP}&ConnectionId=${requestId}`;

      // Connect to Microsoft TTS WebSocket
      const ws = new WebSocket(wsUrl);

      const audioChunks: ArrayBuffer[] = [];

      const audioPromise = new Promise<ArrayBuffer>((resolve, reject) => {
        const timeout = setTimeout(() => {
          ws.close();
          reject(new Error("TTS timeout"));
        }, 15000);

        ws.addEventListener("open", () => {
          // Send config
          ws.send(
            `Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
            JSON.stringify({
              context: {
                synthesis: {
                  audio: {
                    metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "false" },
                    outputFormat: outputFormat,
                  },
                },
              },
            })
          );

          // Send SSML
          const ssml = buildSSML(text, voice);
          ws.send(
            `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n${ssml}`
          );
        });

        ws.addEventListener("message", (event) => {
          if (typeof event.data === "string") {
            if (event.data.includes("Path:turn.end")) {
              clearTimeout(timeout);
              ws.close();
              // Concatenate all audio chunks
              const totalLength = audioChunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
              const result = new Uint8Array(totalLength);
              let offset = 0;
              for (const chunk of audioChunks) {
                result.set(new Uint8Array(chunk), offset);
                offset += chunk.byteLength;
              }
              resolve(result.buffer);
            }
          } else if (event.data instanceof ArrayBuffer) {
            // Binary message: header + audio data
            const view = new DataView(event.data);
            const headerLen = view.getUint16(0);
            const audioData = event.data.slice(headerLen + 2);
            if (audioData.byteLength > 0) {
              audioChunks.push(audioData);
            }
          }
        });

        ws.addEventListener("error", (e) => {
          clearTimeout(timeout);
          reject(new Error("WebSocket error: " + String(e)));
        });

        ws.addEventListener("close", () => {
          clearTimeout(timeout);
          if (audioChunks.length === 0) {
            reject(new Error("No audio received"));
          }
        });
      });

      const audioBuffer = await audioPromise;

      return new Response(audioBuffer, {
        headers: {
          ...corsHeaders,
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      return new Response(JSON.stringify({ error: msg }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
