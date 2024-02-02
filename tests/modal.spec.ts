import { test, expect } from '@playwright/test'

test('Open Modal', async ({ page }) => {
  await page.goto('?id=components-modal--default&viewMode=story')
  await expect(page.getByRole('button', { name: 'Open Modal' })).toBeVisible()
  await page.getByRole('button', { name: 'Open Modal' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.locator('[id="__-modal-areas"]').getByRole('button').click()

  await page.waitForTimeout(500)

  await expect(page.getByRole('dialog')).not.toBeVisible()
})
