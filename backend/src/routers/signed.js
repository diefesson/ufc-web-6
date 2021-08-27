const { forbidden } = require("../util/response-util")

module.exports = (req, res, next) => {
    if (req.session.userId != null) {
        next()
    } else {
        forbidden(res)
    }
}