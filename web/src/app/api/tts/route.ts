import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, lang } = await req.json();

    if (!text || typeof text !== 'string' || text.length > 2000) {
      return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
    }

    const voice = lang === 'en'
      ? 'en-US-AriaNeural'
      : 'zh-CN-XiaoxiaoNeural';

    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(text);

    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    const audioBuffer = Buffer.concat(chunks);

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    console.error('TTS error:', e);
    return NextResponse.json({ error: 'TTS failed' }, { status: 500 });
  }
}
