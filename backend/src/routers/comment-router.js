const express = require("express")
const commentController = require("../controllers/comment-controller")
const commentSchema = require("../validation/comment-schema")
const signed = require("./signed")
const validate = require("./validate")

const router = express.Router()

router.post("/", signed, validate(commentSchema), commentController.add)
router.get("/", commentController.findAll)

module.exports = router