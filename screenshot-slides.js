const { firefox } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');

async function captureSlides() {
  // Create a simple HTTP server to serve the files
  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    const contentType = ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : 'text/html';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });

  await new Promise(resolve => server.listen(8765, resolve));
  console.log('Server started on port 8765');

  const browser = await firefox.launch({
    headless: true
  });
  const page = await browser.newPage();

  // Set viewport to slide dimensions
  await page.setViewportSize({ width: 1280, height: 720 });

  // Load the HTML file
  await page.goto('http://localhost:8765/index.html');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Get all slides - they use id="1", id="2", etc.
  const slideCount = await page.evaluate(() => {
    // Count sections with numeric IDs
    return document.querySelectorAll('section[id]').length;
  });
  console.log(`Found ${slideCount} slides`);

  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // Navigate through slides and capture screenshots
  for (let i = 1; i <= slideCount; i++) {
    // Navigate to the slide
    await page.goto(`http://localhost:8765/index.html#${i}`);
    await page.waitForTimeout(200);

    // Capture the visible slide
    const slideElement = await page.$(`section[id="${i}"]`);
    if (slideElement) {
      await slideElement.screenshot({
        path: path.join(screenshotsDir, `slide-${String(i).padStart(2, '0')}.png`)
      });
      console.log(`Captured slide ${i}`);
    } else {
      console.log(`Slide ${i} not found`);
    }
  }

  await browser.close();
  server.close();
  console.log(`Screenshots saved to ${screenshotsDir}`);
}

captureSlides().catch(console.error);
