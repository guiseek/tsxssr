import {existsSync, mkdirSync, writeFileSync} from 'fs'
import puppeteer from 'puppeteer'
import {join} from 'path'

function normalizePath(rawPptPath: string) {
  return rawPptPath.replace('JSHandle:http://localhost:8080', '')
}

;(async () => {
  // Launch the browser
  const browser = await puppeteer.launch()

  // Create a page
  const page = await browser.newPage()

  // Go to your site
  await page.goto('http://localhost:8080')

  // Select nav
  const links = await page.waitForSelector('nav')

  // Stop if not links
  if (!links) return

  // Iterate links founded
  for (const link of await links.$$('li > a')) {
    // Navigate
    await link.click()

    // Handle path
    const href = await link.asElement().getProperty('href')
    const dir = normalizePath(href.toString())
    const path = join('dist', 'ssr', dir)

    // If not home, create path
    if (!existsSync(path)) mkdirSync(path, {recursive: true})

    // Write HTML content to path
    writeFileSync(join(path, `index.html`), await page.content())
  }

  await links.dispose()

  await browser.close()
})()
