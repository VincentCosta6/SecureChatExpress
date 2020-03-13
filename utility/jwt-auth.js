const jwt = require("jsonwebtoken")

function currentTimePlusHoursToSeconds(hours) {
    return Math.floor(Date.now() / 1000) + (hours * 60 * 60)
}

function createJWT(data, options, hours = 1) {
    return jwt.sign(data, process.env.JWT_SECRET, { ...options, expiresIn: currentTimePlusHoursToSeconds(hours) })
}

module.exports = {
    currentTimePlusHoursToSeconds,
    createJWT
}