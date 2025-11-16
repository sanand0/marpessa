const { firefox } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8765;

// Simple HTTP server
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'examples.html' : req.url);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.css': 'text/css',
    '.js': 'application/javascript'
  }[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(filePath));
});

const slideNames = [
  'columns-1-2',
  'columns-2-1',
  'columns-1-2-1',
  'font-size-slide',
  'font-size-specific',
  'font-size-inline',
  'hero-basic',
  'hero-gradient',
  'gradient-slide',
  'gradient-element',
  'gradient-text',
  'icon-grid',
  'icon-grid-desc',
  'combining-features'
];

async function takeScreenshots() {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  const browser = await firefox.launch({
    headless: true,
    executablePath: '/home/user/.cache/ms-playwright/firefox-1495/firefox/firefox'
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  await page.goto(`http://localhost:${PORT}/`);
  await page.waitForLoadState('networkidle');

  // Get total number of slides
  const totalSlides = await page.evaluate(() => {
    const slides = document.querySelectorAll('section');
    return slides.length;
  });

  console.log(`Found ${totalSlides} slides`);

  for (let i = 0; i < totalSlides; i++) {
    // Navigate to slide
    await page.goto(`http://localhost:${PORT}/#${i + 1}`);
    await page.waitForTimeout(500); // Wait for slide transition

    const slideName = slideNames[i] || `slide-${i + 1}`;
    const screenshotPath = path.join(screenshotsDir, `${slideName}.png`);

    // Take screenshot of just the slide area
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: 1280, height: 720 }
    });

    console.log(`Captured: ${slideName}.png`);
  }

  await browser.close();
  server.close();
  console.log('Done!');
}

takeScreenshots().catch(err => {
  console.error('Error:', err);
  server.close();
  process.exit(1);
});
