#!/usr/bin/env python3
"""Lightweight Edge TTS HTTP server for Family Altar"""
import asyncio, io, json
from http.server import HTTPServer, BaseHTTPRequestHandler
import edge_tts

VOICES = {'zh': 'zh-CN-YunjianNeural', 'en': 'en-US-AndrewNeural'}

class Handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(length)) if length else {}
        text = body.get('text', '')
        lang = body.get('lang', 'zh')

        if not text or len(text) > 2000:
            self.send_response(400)
            self._cors()
            self.end_headers()
            self.wfile.write(b'{"error":"bad text"}')
            return

        voice = VOICES.get(lang, VOICES['zh'])
        try:
            audio = asyncio.run(self._synthesize(text, voice, lang))
            self.send_response(200)
            self._cors()
            self.send_header('Content-Type', 'audio/mpeg')
            self.send_header('Cache-Control', 'public, max-age=86400')
            self.send_header('Content-Length', str(len(audio)))
            self.end_headers()
            self.wfile.write(audio)
        except Exception as e:
            self.send_response(500)
            self._cors()
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())

    async def _synthesize(self, text, voice, lang='zh'):
        rate = '-10%' if lang == 'zh' else '+0%'
        communicate = edge_tts.Communicate(text, voice, rate=rate)
        buf = io.BytesIO()
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                buf.write(chunk["data"])
        return buf.getvalue()

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def log_message(self, format, *args):
        pass  # quiet

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 3002), Handler)
    print('Edge TTS server running on http://localhost:3002')
    server.serve_forever()
