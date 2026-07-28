import { defineConfig, devices } from '@playwright/test';

// These specs run against the LIVE production site by default — there is no
// local dev-server bootstrap here on purpose. Override E2E_BASE_URL to point
// at a preview deploy or `vite preview` when testing unreleased changes.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  // Prod can be briefly slow (Netlify cold CDN edge); retry once before failing
  // so the weekly cron doesn't page on transient network blips.
  retries: 1,
  reporter: 'list',
  use: {
    baseURL: process.env.E2E_BASE_URL || 'https://gcl-wa.com',
    // Trace only on retry — keeps normal runs fast but leaves evidence when
    // the live site actually regresses.
    trace: 'on-first-retry',
  },
  projects: [
    // Chromium only: this is a smoke suite for the customer path, not a
    // cross-browser matrix. Widen only if a browser-specific bug ever ships.
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
