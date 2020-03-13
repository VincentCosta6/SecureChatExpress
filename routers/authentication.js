const authRouter = require("express").Router()
const authenticationMiddleware = require("../middleware/authentication")

authRouter.post("/register", (req, res) => {

})

authRouter.post("/login", (req, res) => {

})

authRouter.post("/logout", authenticationMiddleware, (req, res) => {

})

module.exports = authRouter
