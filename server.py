#!/usr/bin/env python3
"""
Simple HTTP server for the memory game.
Run with: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Suppress default logging
        pass

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Try to find an available port starting from PORT
    port = PORT
    max_attempts = 10
    
    for attempt in range(max_attempts):
        try:
            # Allow address reuse to handle TIME_WAIT state
            socketserver.TCPServer.allow_reuse_address = True
            httpd = socketserver.TCPServer(("", port), MyHTTPRequestHandler)
            break
        except OSError as e:
            if e.errno == 98:  # Address already in use
                if attempt < max_attempts - 1:
                    print(f"Port {port} is already in use, trying {port + 1}...")
                    port += 1
                else:
                    print(f"Error: Could not find an available port after {max_attempts} attempts.")
                    print(f"Port {PORT} is likely in use by another process.")
                    print("Try: lsof -i :8000  or  killall python3")
                    sys.exit(1)
            else:
                raise
    
    url = f"http://localhost:{port}"
    print(f"Server running at {url}")
    print("Press Ctrl+C to stop the server")
    try:
        webbrowser.open(url)
    except Exception:
        pass  # Ignore browser opening errors
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        httpd.shutdown()

if __name__ == "__main__":
    main()

