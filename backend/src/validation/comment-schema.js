const Joi = require("joi")

module.exports = Joi.object({
    text: Joi.string().min(3).max(100).required(),
    postId: Joi.number().integer().min(1).required()
})