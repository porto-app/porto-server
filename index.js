//npm i express required
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}));

//start controller

const profileController = require("./controllers/profiles")
app.use("/profiles/", profileController)

//end controller
const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}`)
})