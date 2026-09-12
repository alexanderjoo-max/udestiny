import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const out = join(dirname(fileURLToPath(import.meta.url)), "../qa");
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

async function shoot(name, viewport) {
  const page = await browser.newPage({ viewport });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200); // splash
  await page.screenshot({
    path: join(out, `${name}-hero.png`),
    fullPage: false,
  });
  await page.screenshot({
    path: join(out, `${name}-full.png`),
    fullPage: true,
  });

  // Exercise language switch
  await page.click(".lang-btn");
  await page.waitForTimeout(200);
  await page.screenshot({
    path: join(out, `${name}-lang.png`),
    fullPage: false,
  });
  await page.getByRole("option", { name: "中文" }).click();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: join(out, `${name}-zh.png`),
    fullPage: false,
  });
  await page.click(".lang-btn");
  await page.getByRole("option", { name: "English" }).click();

  // Scroll to sections
  for (const id of ["manifesto", "practice", "elements", "alice", "wobazi", "begin"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: join(out, `${name}-${id}.png`),
      fullPage: false,
    });
  }

  // Click an element card
  await page.locator("#elements").scrollIntoViewIfNeeded();
  await page.locator('.el-card[data-el="fire"]').click();
  await page.waitForTimeout(300);

  // Mobile menu if toggle visible
  const toggle = page.locator(".nav-toggle");
  if (await toggle.isVisible()) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await toggle.click();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: join(out, `${name}-menu.png`),
      fullPage: false,
    });
    await page.locator('.nav-links a[href="#alice"]').click();
    await page.waitForTimeout(400);
  }

  const body = await page.locator("body").innerText();
  const pricingHits = [...body.matchAll(/\$|฿|baht|price|pricing|package|฿|ราคา/gi)].map(
    (m) => m[0],
  );
  console.log(name, "pricing-like:", pricingHits);
  await page.close();
}

await shoot("desktop", { width: 1440, height: 900 });
await shoot("mobile", { width: 390, height: 844 });
await browser.close();
console.log("done");
