const authRouter = require("express").Router()

const bcrypt = require("bcrypt")
const pg = require("pg")

const { createJWT } = require("../utility/jwt-auth")

const authenticationMiddleware = require("../middleware/authentication")

authRouter.post("/register", (req, res) => {

})

authRouter.post("/login", (req, res) => {

})

authRouter.post("/logout", authenticationMiddleware, (req, res) => {

})

module.exports = authRouter
