const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let driver = new Builder().forBrowser('chrome').build();

Given('I\'m have {string} clientes in my database', function (string) {
    console.log("inseri os dados na base");
});

When('I access the home webpage', async function () {
    await driver.get('http://localhost:3000');
    await driver.sleep(1000);
});

Then('see the list o {string} itens', async function (string) {
    let qtd=await driver.findElements(By.css('body tr'));
    assert.equal(qtd.length,parseInt(string));
    await driver.quit();
});
