const { browser } = require("protractor");
const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function googleSearch() {

    try {

        await driver.get('https://www.google.com/');

        await (await driver).sleep(750);
        
        await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[2]/div[1]/div[1]/div/div[2]/input')).sendKeys("Bloxico");

        await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[2]/div[1]/div[3]/center/input[1]')).click();

        await (await driver).sleep(800);

        await driver.findElement(By.partialLinkText("bloxico.com")).click();

        console.log("Test is complete");

    } catch (error) {
        console.log(error);
    }

}

googleSearch();