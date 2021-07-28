const express = require("express")
const carController = require("../controllers/car-controller")

const router = express.Router()

router.post("/", carController.post)
router.put("/:id", carController.put)
router.get("/", carController.get)
router.get("/:id", carController.getById)
router.delete("/:id", carController.delete)

module.exports = router