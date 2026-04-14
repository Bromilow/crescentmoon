#!/bin/zsh
# Start local dev server and open site in browser

# Free port 8080 if something is already using it
existing=$(lsof -i :8080 -t 2>/dev/null)
if [[ -n "$existing" ]]; then
  echo "Clearing port 8080 (PID $existing)..."
  kill $existing 2>/dev/null
  sleep 0.5
fi

cd "$(dirname "$0")/public_html"
echo "\nStarting local server at http://localhost:8080\n"
open "http://localhost:8080"
python3 serve_local.py
