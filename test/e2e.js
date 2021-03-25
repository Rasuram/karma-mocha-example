require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Cdk.com', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search favorite in CDK', async function () {
        await driver.get('https://www.cdkglobal.com/us');
        await driver.findElement(By.className('first')).click();
        await driver.wait(until.elementLocated(By.className('field-title')), 10000);
        let title = await driver.getTitle();
        assert.equal(title, 'CDK Global india | Company');
    });

    after(() => driver && driver.quit());
})
