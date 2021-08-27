const Joi = require("joi");

module.exports = Joi.object({
    text: Joi.string().min(5).max(100).required()
})