import { test, expect } from '@playwright/test';

// The site is a single page — every "section" test is really asserting that
// App.jsx still mounts the component and its anchor id survived refactors
// (the navbar scroll-links depend on those ids, so they double as a contract).

test.beforeEach(async ({ page }) => {
  // Pre-seed the consent decision so the CookieConsent banner never renders.
  // 'rejected' rather than 'accepted' on purpose: accepting would load Google
  // Analytics and pollute the owner's real traffic stats with test runs.
  await page.addInitScript(() => {
    window.localStorage.setItem('cookieConsent', 'rejected');
  });
  await page.goto('/');
});

test('home page renders with correct title and hero', async ({ page }) => {
  // Title lives in index.html, not React — a broken JS bundle would still pass
  // the title check, which is why the hero h1 assertion follows it.
  await expect(page).toHaveTitle(/Green Collar Landscaping/);
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /Hardscaping Solutions Engineered for the Pacific Northwest/i,
    })
  ).toBeVisible();
});

test('core sections are present', async ({ page }) => {
  // Ids, not text, because marketing copy changes freely; the anchors are the
  // stable contract the navbar relies on.
  for (const id of ['services', 'gallery', 'contact', 'calculator']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  // Services heading proves the grid actually rendered content, not just the
  // empty section shell.
  await expect(page.locator('#services-heading')).toBeVisible();
});

test('phone links point at the real business number', async ({ page }) => {
  // The number is duplicated across components with two tel: formats (see
  // CLAUDE.md trap). Accept either format but pin the digits — a typo'd digit
  // here silently sends customers to a stranger.
  const telLinks = page.locator('a[href^="tel:"]');
  expect(await telLinks.count()).toBeGreaterThan(0);
  for (const href of await telLinks.evaluateAll((as) =>
    as.map((a) => (a as HTMLAnchorElement).getAttribute('href') || '')
  )) {
    expect(href.replace(/[^0-9]/g, '')).toMatch(/^1?2532126752$/);
  }
});
