const jwt = require("jsonwebtoken")

function authentication(req, res, next) {
    const authHeader = req.header('Authorization')

    if(!authHeader || authHeader.length < 10) {
        res.status(401).json({ msg: "You must send an authorization header with this request", err: "No Authorization header" })
        return
    }

    jwt.verify(req.header('Authorization'), process.env.JWT_SECRET, {}, function(err, decoded) {
        if(err || !decoded) {
            res.status(401).json({ msg: "Authorization error", err: err.message })
            return
        }

        req.jwt = decoded
        next()
    })
}

module.exports = authentication