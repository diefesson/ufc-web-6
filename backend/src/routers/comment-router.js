const express = require("express")
const commentController = require("../controllers/comment-controller")

const router  = express.Router()

router.post("/", commentController.add)
router.get("/", commentController.findAll)

module.exports = router