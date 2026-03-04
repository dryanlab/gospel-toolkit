#!/usr/bin/env python3
"""Lightweight Edge TTS HTTP server for Family Altar"""
import asyncio, io, json
from http.server import HTTPServer, BaseHTTPRequestHandler
import edge_tts

VOICES = {'zh': 'zh-CN-YunjianNeural', 'en': 'en-US-AndrewNeural'}
VOICES_FEMALE = {'zh': 'zh-CN-XiaoxiaoNeural', 'en': 'en-US-JennyNeural'}

# Characters that edge-tts mispronounces — replace before synthesis
ZH_REPLACEMENTS = {
    '牠': '他',
    '祂': '他',
    '衪': '他',
    # === 多音字发音修正 — Edge TTS 默认读错的 ===
    # 传 zhuàn (传记/经传) — not chuán (传递)
    '使徒行传': '使徒型撰',
    '伶长': '伶掌',  # 长 zhǎng (chief musician) not cháng
    '名在全地': '名，在全第',  # 地 dì (earth) + 逗号断句

    # 乐 yuè (音乐) — 连读吞字修正
    # 长 zhǎng (长老/族长/长子) — not cháng; edge-tts usually correct, keep as safety
    # 差 chāi (差遣) — edge-tts usually correct
    # 数 shǔ (数点/数算) — edge-tts usually correct
}

import re
# Regex-based replacements applied after dict replacements
ZH_REGEX_FIXES = [
    # Remove translator notes — not part of scripture
    (re.compile(r'（或译[^）]*）'), ''),
    (re.compile(r'（或作[^）]*）'), ''),
    # 耶和华─ → comma pause
    (re.compile(r'耶和华─'), '耶和华，'),
    (re.compile(r'─'), '，'),
]

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

        if not text or len(text) > 20000:
            self.send_response(400)
            self._cors()
            self.end_headers()
            self.wfile.write(b'{"error":"bad text"}')
            return

        # Fix mispronounced characters
        if lang == 'zh':
            for wrong, right in ZH_REPLACEMENTS.items():
                text = text.replace(wrong, right)
            for pattern, replacement in ZH_REGEX_FIXES:
                text = pattern.sub(replacement, text)

        gender = body.get('gender', 'male')
        if gender == 'female':
            voice = VOICES_FEMALE.get(lang, VOICES_FEMALE['zh'])
        else:
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
    server = HTTPServer(('127.0.0.1', 3000), Handler)
    print('Edge TTS server running on http://localhost:3000')
    server.serve_forever()
