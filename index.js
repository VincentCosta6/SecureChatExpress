const express = require("express")
const helmet = require("helmet")
const bodyParser = require("body-parser")

const authRouter = require("./routers/authentication")

require("dotenv").config()

const app = express()

app.use(helmet())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    return res.status(200).json({ msg: "success" })
})

app.use("/auth", authRouter)

app.listen(process.env.PORT || 80, _ => {
    console.log("Listening...")
})