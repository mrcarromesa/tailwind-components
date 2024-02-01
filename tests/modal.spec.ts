import { test, expect } from '@playwright/test'

test('Open Modal', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?args=&id=components-modal--default'
  )

  await expect(
    page.getByRole('button', { name: 'Open Modal' })
  ).toBeInViewport()
  await page.getByRole('button', { name: 'Open Modal' }).click()
  await expect(page.getByRole('dialog')).toBeAttached()

  // TODO:

  await page.locator('[id="__-modal-areas"]').getByRole('button').click()

  await expect(page.getByRole('dialog')).not.toBeAttached()
})
