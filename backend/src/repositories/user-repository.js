const { User } = require("../models")

exports.findByCredentials = async (username, password) => {
    return await User.findOne({
        where: {
            username,
            password
        }
    })
}