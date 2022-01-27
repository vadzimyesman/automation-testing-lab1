const {By} = require("selenium-webdriver")

const deleteMovie = async (driver) =>{

    await driver.findElement(By.xpath('//input')).sendKeys(`The Professional`)

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button[contains(text(),"x")]')).click()

    await driver.sleep(1000)

    let array = await driver.findElements(By.xpath('//button[contains(text(),"x")]'))

    //let movieList = await driver.findElement(By.xpath('//ul'))


    //let numberOfMovies = await movieList.findElements(By.xpath("*"))
    
    //console.log(numberOfMovies.size())

    expect(array.length).toBe(0)
}


const checkOffMovie = async (driver) =>{

    await driver.findElement(By.xpath('//input')).clear()

    await driver.findElement(By.xpath('//input')).sendKeys(`The professional`)

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//span')).click()

    await driver.sleep(1000)

    let array = await driver.findElements(By.className('checked'))

 

    expect(array.length).toBe(1)
}

const checkMessageText = async (driver) =>{

    await driver.findElement(By.xpath('//input')).clear()

    //await driver.findElement(By.xpath('//input')).sendKeys(`The Professional`)

    //await driver.sleep(1000)

    //await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    //await driver.findElement(By.xpath('//span')).click()

    await driver.findElement(By.xpath('//span')).click()

    const message = await driver.findElement(By.id('message')).getText()

    await driver.sleep(1000)

    //let array = await driver.findElements(By.className('checked'))

 

    expect(message).toBe("The professional added back!")
}

const deleteMovie2 = async (driver) =>{

    await driver.findElement(By.xpath('//input')).clear()

    await driver.findElement(By.xpath('//button[contains(text(),"x")]')).click()

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//input')).sendKeys("Ameli")

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//input')).sendKeys("Rap")

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//button[contains(text(),"x")]'))

    let movieList = await driver.findElement(By.xpath('//ul'))

    let childrenArray = await movieList.findElements(By.xpath("./child::*"))

    await driver.sleep(1000)

    //let array = await driver.findElements(By.xpath('//button[contains(text(),"x")]'))

    


    //let numberOfMovies = await movieList.findElements(By.xpath("*"))
    
    //console.log(numberOfMovies.size())

    expect(childrenArray.length).toBe(2)
}


module.exports = {
    deleteMovie,
    checkOffMovie,
    checkMessageText,
    deleteMovie2
}