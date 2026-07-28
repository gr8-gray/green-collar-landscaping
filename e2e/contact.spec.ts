import { test, expect } from '@playwright/test';

// Contact-form coverage stops deliberately short of submission: these specs
// run against production, and a successful POST would land a fake lead in the
// owner's inbox via Web3Forms. Validation fires client-side BEFORE any network
// call, so we can prove the whole path up to the wire without crossing it.

test.beforeEach(async ({ page }) => {
  // Belt and suspenders: even if a future refactor breaks the validation
  // gate, no request may ever reach Web3Forms from a test run.
  await page.route('**/api.web3forms.com/**', (route) => route.abort());
  // Suppress the cookie banner; 'rejected' also keeps GA out of the run.
  await page.addInitScript(() => {
    window.localStorage.setItem('cookieConsent', 'rejected');
  });
  await page.goto('/');
});

test('contact form renders with all lead-capture fields', async ({ page }) => {
  const form = page.getByRole('form', { name: /contact form/i });
  await expect(form).toBeAttached();
  // Field ids are the accessibility contract (labels + aria-describedby hang
  // off them), so they are the right thing to pin.
  for (const id of ['name', 'email', 'phone', 'service', 'message']) {
    await expect(form.locator(`#${id}`)).toBeAttached();
  }
  await expect(form.getByRole('button', { name: /send message/i })).toBeAttached();
});

test('empty submit is blocked by validation, not sent', async ({ page }) => {
  const form = page.getByRole('form', { name: /contact form/i });
  // Scroll into view first — the form sits at the bottom of a long page and
  // framer-motion sections animate in on scroll.
  await form.scrollIntoViewIfNeeded();
  await form.getByRole('button', { name: /send message/i }).click();

  // validateForm() must reject all three required fields and surface inline
  // errors. If these appear, no fetch was attempted (the route.abort() above
  // would have surfaced a failed-submit state instead).
  await expect(page.getByText('Name is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Project details are required')).toBeVisible();
});

test('bad email is rejected before anything leaves the browser', async ({ page }) => {
  const form = page.getByRole('form', { name: /contact form/i });
  await form.scrollIntoViewIfNeeded();
  // Fill enough that ONLY the email rule can trip — isolates the assertion.
  // The value must pass the browser's native type="email" check (the form has
  // no noValidate, so native validation runs first and would swallow a plain
  // "not-an-email") yet fail the component's stricter dot-requiring regex —
  // "test@example" sits exactly in that gap.
  await form.locator('#name').fill('Playwright Smoke');
  await form.locator('#email').fill('test@example');
  await form.locator('#message').fill('Automated validation check, not a lead.');
  await form.getByRole('button', { name: /send message/i }).click();

  await expect(page.getByText(/valid email address/i)).toBeVisible();
});
