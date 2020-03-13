const express = require("express")
const helmet = require("helmet")
const bodyParser = require("body-parser")

require("dotenv").config()

const app = express()

app.use(helmet())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    return res.status(200).json({ msg: "success" })
})

app.listen(80, _ => {
    console.log("Listening...")
})