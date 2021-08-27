const express = require("express")
const postController = require("../controllers/post-controller")
const postSchema = require("../validation/post-schema")
const signed = require("./signed")
const validate = require("./validate")

const router = express.Router()

router.post("/", signed, validate(postSchema), postController.add)
router.get("/", postController.findAll)

module.exports = router