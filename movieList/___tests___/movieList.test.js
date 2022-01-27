const { TestScheduler } = require('jest')
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Import the functions I want to test
const {deleteMovie, checkOffMovie, checkMessageText,deleteMovie2} = require("../functions/deleteMovie.js")

beforeAll(async ()=>{
    await driver.get('http://localhost:5501/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})


test("Delete a movie", async ()=>{
    await deleteMovie(driver);
    //add await .sleep() to display results for longer
})

test("Check off movie", async ()=>{
    await checkOffMovie(driver);
    //add await .sleep() to display results for longer
})

test("Check message text", async ()=>{
    await checkMessageText(driver);
})

test("Delete movie test #2", async ()=>{
    await deleteMovie2(driver);
})
