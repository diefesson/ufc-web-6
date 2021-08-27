const express = require("express")
const postController = require("../controllers/post-controller")

const router  = express.Router()

router.post("/", postController.add)
router.get("/", postController.findAll)

module.exports = router