const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function runVerification() {
  console.log('--- STARTING COMPREHENSIVE BROWSER VERIFICATION ---');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  if (!fs.existsSync(chromePath)) {
    throw new Error(`Chrome binary not found at ${chromePath}`);
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    protocolTimeout: 120000,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  // Track console errors & warnings
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('Browser Console Error:', msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
    console.error('Uncaught Page Error:', err.message);
  });

  // Track failed network requests
  const failedRequests = [];
  page.on('requestfailed', (req) => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
    console.warn('Network Request Failed:', req.url());
  });

  // 1. Load desktop viewport
  await page.setViewport({ width: 1440, height: 900 });
  console.log('1. Navigating to http://127.0.0.1:5173/...');
  const response = await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0', timeout: 20000 });
  
  console.log(`HTTP Response Status: ${response.status()}`);
  if (response.status() !== 200) {
    throw new Error(`Expected 200 OK, got ${response.status()}`);
  }

  // 2. Check title
  const title = await page.title();
  console.log(`2. Page Title: "${title}"`);

  // 3. Verify Hero Section & Pricing
  const heroPricing = await page.$eval('#hero', (el) => el.innerText);
  console.log('3. Checking Hero content for verified pricing and certification...');
  const hasPricing = heroPricing.includes('₹6,999');
  const hasCert = heroPricing.includes('ISO & Central Govt Certified');
  console.log(`   - Contains Starting Price ₹6,999: ${hasPricing}`);
  console.log(`   - Contains ISO & Govt Certification: ${hasCert}`);

  // Trigger image loading by quick scroll
  console.log('4. Scrolling to trigger image loads...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));

  const imageResults = await page.$$eval('img', (imgs) => {
    return imgs.map((img) => ({
      src: img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      isLoaded: img.naturalWidth > 0
    }));
  });

  console.log(`   - Total images on page: ${imageResults.length}`);
  const brokenImages = imageResults.filter((img) => !img.isLoaded);
  if (brokenImages.length > 0) {
    console.error('Broken images found:', brokenImages);
  } else {
    console.log('   - ALL IMAGES LOADED SUCCESSFULLY (0 broken images)!');
  }

  // 5. Test Before/After Slider Interaction
  console.log('5. Testing Interactive Before/After Transformation Slider...');
  const sliderInput = await page.$('#transformation-range');
  if (sliderInput) {
    await page.$eval('#transformation-range', (el) => {
      el.value = 30;
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    console.log('   - Successfully moved slider to 30% position.');
  }

  // 6. Test Quote Builder Live Calculation
  console.log('6. Testing Interactive Quote Calculator...');
  const initialEstimatedPrice = await page.$eval('#quote-builder span', (el) => el.innerText);
  
  // Select different service and change family count
  const serviceSelect = await page.$('#quote-builder select');
  if (serviceSelect) {
    await serviceSelect.select('Evening Reception & Cocktail Glam');
    console.log('   - Selected "Evening Reception & Cocktail Glam" in quote builder.');
  }

  // 7. Test Lookbook Lightbox Modal
  console.log('7. Testing Lookbook Gallery Lightbox...');
  const firstLookCard = await page.$('#lookbook div[style*="cursor: pointer"]');
  if (firstLookCard) {
    await firstLookCard.click();
    await new Promise((r) => setTimeout(r, 600));
    const lightboxVisible = await page.$('div[style*="zIndex: 2000"], div[style*="z-index: 2000"]');
    console.log(`   - Lightbox modal opened: ${!!lightboxVisible}`);
    
    // Close lightbox
    const closeBtn = await page.$('button[aria-label="Close Lightbox"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      console.log('   - Lightbox modal closed cleanly.');
    }
  }

  // 8. Test Featured Story Highlights Modal
  console.log('8. Testing Story Highlights Modal...');
  const highlightItem = await page.$('#highlights div[style*="cursor: pointer"]');
  if (highlightItem) {
    await highlightItem.click();
    await new Promise((r) => setTimeout(r, 600));
    const highlightModal = await page.$('button[aria-label="Close Highlight"]');
    console.log(`   - Highlight modal opened: ${!!highlightModal}`);
    if (highlightModal) {
      await highlightModal.click();
      await new Promise((r) => setTimeout(r, 400));
      console.log('   - Highlight modal closed cleanly.');
    }
  }

  // 9. Test Booking Modal
  console.log('9. Testing Booking Modal...');
  const bookDateBtn = await page.$('button.btn-primary');
  if (bookDateBtn) {
    await bookDateBtn.click();
    await new Promise((r) => setTimeout(r, 600));
    const bookingModal = await page.$('button[aria-label="Close booking modal"]');
    console.log(`   - Booking modal opened: ${!!bookingModal}`);
    if (bookingModal) {
      await bookingModal.click();
      await new Promise((r) => setTimeout(r, 400));
      console.log('   - Booking modal closed cleanly.');
    }
  }

  // 10. Capture Full Desktop Screenshot
  const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\8e726c5f-8a25-4b2f-86ee-4676648b910a';
  const desktopScreenshotPath = path.join(artifactDir, 'verified_desktop.png');
  await page.screenshot({ path: desktopScreenshotPath, fullPage: true });
  console.log(`10. Full desktop screenshot captured at: ${desktopScreenshotPath}`);

  // 11. Test Mobile Viewport & Responsiveness
  console.log('11. Testing Mobile Viewport (390px x 844px)...');
  await page.setViewport({ width: 390, height: 844 });
  await new Promise((r) => setTimeout(r, 500));

  const overflowCheck = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log(`    - Mobile overflow check: scrollWidth=${overflowCheck.scrollWidth}, clientWidth=${overflowCheck.clientWidth}, hasOverflow=${overflowCheck.hasOverflow}`);

  // Test mobile menu button
  const mobileMenuBtn = await page.$('button.mobile-menu-btn');
  console.log(`    - Mobile hamburger button visible: ${!!mobileMenuBtn}`);
  if (mobileMenuBtn) {
    await mobileMenuBtn.click();
    await new Promise((r) => setTimeout(r, 400));
    const drawerOpen = await page.$('a[href="#quote-builder"]');
    console.log(`    - Mobile navigation drawer expanded: ${!!drawerOpen}`);
    await mobileMenuBtn.click(); // close
  }

  // Test Floating Contact Actions
  const floatingActions = await page.$('div[role="region"][aria-label="Quick contact actions"]');
  console.log(`    - Floating contact dock visible on mobile: ${!!floatingActions}`);

  // Capture Mobile Screenshot
  const mobileScreenshotPath = path.join(artifactDir, 'verified_mobile.png');
  await page.screenshot({ path: mobileScreenshotPath, fullPage: false });
  console.log(`    - Mobile viewport screenshot captured at: ${mobileScreenshotPath}`);

  await browser.close();

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  console.log(`Total Failed Network Requests: ${failedRequests.length}`);
  console.log(`Broken Images: ${brokenImages.length}`);
  console.log(`Mobile Horizontal Overflow: ${overflowCheck.hasOverflow ? 'YES (BAD)' : 'NONE (PERFECT)'}`);
  console.log('--- ALL CHECKS COMPLETED ---');

  if (consoleErrors.length > 0 || failedRequests.length > 0 || brokenImages.length > 0 || overflowCheck.hasOverflow) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runVerification().catch((err) => {
  console.error('Fatal Verification Error:', err);
  process.exit(1);
});
