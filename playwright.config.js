import { defineConfig, devices } from '@playwright/test'

// Live smoke config. Targets the deployed site (gcl-wa.com) by default; override
// with GCL_URL to point at a Netlify branch/deploy preview. No webServer — this
// suite only ever runs against an already-deployed URL (post-deploy CD gate).
const BASE_URL = process.env.GCL_URL || 'https://gcl-wa.com'

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: { timeout: 10_000 },
  retries: 2, // live network — tolerate transient flakiness, red only on real breakage
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
})
