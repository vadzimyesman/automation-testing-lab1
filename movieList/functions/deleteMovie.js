const {By} = require("selenium-webdriver")

const deleteMovie = async (driver) =>{

    await driver.findElement(By.xpath('//input')).sendKeys(`The Professional`)

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button[contains(text(),"x")]'))

    await driver.sleep(1000)

    let array = await driver.findElements(By.xpath('//button[contains(text(),"x")]'))

    let movieList = await driver.findElement(By.xpath('//ul'))

    let numberOfMovies = movieList.allChildElements.size()

    //let numberOfMovies = await movieList.findElements(By.xpath("*"))*/
    
    //console.log(numberOfMovies.size())

    expect(numberOfMovies).toBe(1)
}

module.exports = {
    deleteMovie
}