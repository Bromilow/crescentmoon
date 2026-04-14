#!/usr/bin/env python3
"""
Local dev server with clean URL support (.htaccess-style rewrites).
Serves /about → /about.html, /services/attic-insulation → /services/attic-insulation.html etc.
Uses BaseHTTPRequestHandler directly to avoid SimpleHTTPRequestHandler's
automatic directory→trailing-slash redirects.
"""
import http.server, os, urllib.parse, mimetypes

ROOT = os.path.dirname(os.path.abspath(__file__))

class CleanURLHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path
        path = urllib.parse.unquote(path)
        local = os.path.normpath(os.path.join(ROOT, path.lstrip('/')))

        # Security: block path traversal
        if not local.startswith(ROOT):
            self.send_error(403)
            return

        # Resolve to a real file
        target = None
        if os.path.isfile(local):
            target = local
        elif os.path.isfile(local + '.html'):
            target = local + '.html'
        elif os.path.isdir(local):
            index = os.path.join(local, 'index.html')
            sibling = local.rstrip(os.sep) + '.html'
            if os.path.isfile(index):
                target = index
            elif os.path.isfile(sibling):
                target = sibling

        if target is None:
            target = os.path.join(ROOT, '404.html')

        try:
            with open(target, 'rb') as f:
                content = f.read()
        except OSError:
            self.send_error(500)
            return

        mime = mimetypes.guess_type(target)[0] or 'application/octet-stream'
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', str(len(content)))
        self.send_header('Cache-Control', 'no-cache')
        self.end_headers()
        self.wfile.write(content)

    def log_message(self, fmt, *args):
        print(f"  {args[0]} {args[1]}")

if __name__ == '__main__':
    import socketserver
    PORT = 8080
    os.chdir(ROOT)
    with socketserver.TCPServer(('', PORT), CleanURLHandler) as httpd:
        httpd.allow_reuse_address = True
        print(f'\n  Local server running at http://localhost:{PORT}\n')
        httpd.serve_forever()
