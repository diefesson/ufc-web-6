const { badRequest, notFound, successResponse } = require("../util/response-util")
const userRepository = require("../repositories/user-repository")

exports.signin = async (req, res) => {
    const user = await userRepository.findByCredentials(req.body.username, req.body.password)
    if (user != null) {
        req.session.userId = user.id
        res.cookie("session.userId", user.id)
        res.cookie("session.username", user.username)
        res.end()
    } else {
        notFound(res)
    }
}

exports.signout = (req, res) => {
    req.session.destroy()
    res.clearCookie("sesssio.userId")
    res.clearCookie("session.username")
    res.end()
}