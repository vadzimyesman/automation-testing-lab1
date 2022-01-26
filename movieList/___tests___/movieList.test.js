const { TestScheduler } = require('jest')
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Import the functions I want to test
const {deleteMovie} = require("../functions/deleteMovie.js")

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