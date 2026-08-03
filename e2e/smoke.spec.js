import { test, expect } from '@playwright/test'

// Minimal live smoke gate for the CD auto-rollback pipeline (L1).
// Asserts the critical customer path renders and the lead-gen form is usable.
// It deliberately does NOT submit the form — submitting would create a real
// Web3Forms lead and trip the 60s client throttle. "Submittable" here means the
// form is present, fillable, and the submit control is enabled.

test.describe('GCL live smoke', () => {
  test('homepage loads with correct title', async ({ page }) => {
    const resp = await page.goto('/')
    expect(resp, 'navigation response').toBeTruthy()
    expect(resp.status(), 'homepage HTTP status').toBeLessThan(400)
    await expect(page).toHaveTitle(/Green Collar Landscaping/i)
  })

  test('key sections render', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#home'), 'hero').toBeVisible()
    await expect(page.locator('#services'), 'services grid').toBeVisible()
    await expect(page.locator('#reviews'), 'customer reviews').toBeVisible()
    await expect(page.locator('#contact'), 'contact section').toBeVisible()
  })

  test('contact form is present and submittable (does not submit)', async ({ page }) => {
    await page.goto('/#contact')
    const form = page.locator('form[aria-label="Contact form"]')
    await expect(form).toBeVisible()

    // Fill the required fields. Honeypot (#botcheck) is left untouched on purpose.
    await page.fill('#name', 'CD Smoke Check')
    await page.fill('#email', 'smoke@example.com')
    await page.fill('#message', 'Automated post-deploy smoke check — not a real inquiry.')

    const submit = page.getByRole('button', { name: /send message/i })
    await expect(submit).toBeVisible()
    await expect(submit).toBeEnabled()
    // Intentionally no click — see file header.
  })
})
