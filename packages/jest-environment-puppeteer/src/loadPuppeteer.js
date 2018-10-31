import readConfig from './readConfig'

async function loadPuppeteer() {
  const config = await readConfig()
  const packageName = config.puppeteerCore ? 'puppeteer-core' : 'puppeteer'

  try {
    const puppeteer = require(packageName)
  } catch (e) {
    console.error(
      `
      ${packageName} isn't installed.
      Try \`$ npm i --save-dev ${packageName}\`
      `,
      e,
    )
  }

  return puppeteer
}

export default loadPuppeteer
