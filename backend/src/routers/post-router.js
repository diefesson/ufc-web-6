const express = require("express")
const postController = require("../controllers/post-controller")
const signed = require("./signed")

const router  = express.Router()

router.post("/",signed, postController.add)
router.get("/", postController.findAll)

module.exports = router