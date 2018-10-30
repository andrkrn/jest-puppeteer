import readConfig from './readConfig'

export async function loadPuppeteer() {
  const config = await readConfig()
  const packageName = config.puppeteerCore ? 'puppeteer-core' : 'puppeteer'

  try {
    module.exports = require(packageName)
  } catch (e) {
    console.error(
      `
      ${packageName} isn't installed.
      Try \`$ npm i --save-dev ${packageName}\`
      `,
      e,
    )
  }
}
