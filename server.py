import http.server
import socketserver
import mimetypes
import webbrowser
import os
import sys

# Ensure UTF-8
sys.stdout.reconfigure(encoding='utf-8')

# Ensure working directory is the script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Explicitly register modern web MIME types (fixes Windows registry issues)
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("application/json", ".json")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("text/html", ".html")

PORT = 8000

class StaticsRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and Cache-Control
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.webp'):
            return 'image/webp'
        return super().guess_type(path)

print("=" * 60)
print(f"  StaticsPlay Server กำลังรันที่ http://localhost:{PORT}")
print(f"  โฟลเดอร์ทำงาน: {script_dir}")
print("  กด Ctrl + C เพื่อหยุดการทำงาน")
print("=" * 60)

try:
    webbrowser.open(f"http://localhost:{PORT}")
except Exception:
    pass

with socketserver.TCPServer(("", PORT), StaticsRequestHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nหยุดการทำงานเซิร์ฟเวอร์เรียบร้อย")
