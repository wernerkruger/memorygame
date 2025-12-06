# Number Memory Game

A memory game where you need to remember and repeat sequences of numbers.

## Running the Game

Due to browser security restrictions, you need to run this game through a local web server (not by opening the HTML file directly).

### Option 1: Python (Recommended - Usually pre-installed)

```bash
python3 server.py
```

This will automatically open your browser to `http://localhost:8000`

### Option 2: Node.js

First install dependencies (one-time):
```bash
npm install
```

Then run:
```bash
npm start
```

Or if you prefer npx directly:
```bash
npx http-server -p 8000 -o
```

### Option 3: Any other HTTP server

You can use any local web server. For example:
- PHP: `php -S localhost:8000`
- Ruby: `ruby -run -e httpd . -p 8000`

Then open `http://localhost:8000` in your browser.

## Features

- **Random Mode**: Sequences of random digits
- **PI Mode**: Sequences from the digits of π
- **Keyboard Input**: Use number keys (0-9) or click to input
- **Progress Indicator**: See how many digits you've completed
- **Offline Support**: Works without internet, stores scores locally
- **Online Sync**: Syncs high scores with Firebase when online

