const express = require("express")
const userController = require("../controllers/user-controller")

const router  = express.Router()

router.post("/signin", userController.signin)
router.get("/signout", userController.signout)

module.exports = router