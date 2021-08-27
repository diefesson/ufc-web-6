const Joi = require("joi")
const { badRequest } = require("../util/response-util")


module.exports = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        console.log(result.error)
        if (result.error) {
            badRequest(res)
        } else {
            next()
        }
    }
}