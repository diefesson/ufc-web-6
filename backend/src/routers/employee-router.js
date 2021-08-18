const express = require("express")
const employeePresenter = require("../presenters/employee-presenter")

const router = express.Router()

router.get("/", employeePresenter.get)
router.get("/:id", employeePresenter.getById)
router.post("/", employeePresenter.post)
router.put("/:id", employeePresenter.put)
router.delete("/:id", employeePresenter.delete)

module.exports = router