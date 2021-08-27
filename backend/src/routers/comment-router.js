const express = require("express")
const commentController = require("../controllers/comment-controller")
const signed = require("./signed")

const router = express.Router()

router.post("/", signed, commentController.add)
router.get("/", commentController.findAll)

module.exports = router