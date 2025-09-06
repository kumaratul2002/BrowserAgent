A browser automation agent using OpenAI Agents SDK and Puppeteer. This project uses a modular structure where prompts are imported from JavaScript files.

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Puppeteer Setup:**
```bash
# Puppeteer will automatically download Chrome on first run no additional browser installation needed
```

3. **Set up environment:**
```bash
In .env add 
OPENAI_API_KEY=your_key_here
```

4. **Start Chrome with debugging:**
```bash
# Windows run in cmd
chrome.exe --remote-debugging-port=9222 --user-data-dir="C:/chrome-data"
```

## Usage

### Run Agent
```bash
npm start
```

## See Sample Youtube Video which shows automation of filling contact form on my portfolio website.
https://youtu.be/gsuztcSP30o
