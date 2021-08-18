const employeeController = require("../controllers/employee-controller");
const { badRequest } = require("../util/response-util")
const { parseId, parseLimit } = require("../util/validation-util")
const Employee = require("../models/employee");

exports.get = async function (req, res) {
    let limit = parseLimit(req.query.limit);
    let role = req.query.role;
    if (limit != null) {
        employeeController.get(res, limit, role);
    } else {
        badRequest(res);
    }
}

exports.getById = async function (req, res) {
    let id = parseId(req.params.id)
    if (id != null) {
        employeeController.getById(res, id);
    } else {
        badRequest(res);
    }
}

exports.post = async function (req, res) {
    let employee = new Employee(
        null,
        req.body.name,
        req.body.role,
        req.body.birthday,
        req.body.admissionDay,
    )
    if (employee.isValid()) {
        employeeController.post(res, employee);
    } else {
        badRequest(res);
    }
}

exports.put = async function (req, res) {
    let id = parseId(req.params.id)
    let employee = new Employee(
        null,
        req.body.name,
        req.body.role,
        req.body.birthday,
        req.body.admissionDay,
    )
    if (id != null && employee.isValid()) {
        employeeController.put(res, id, employee);
    } else {
        badRequest(res);
    }
}

exports.delete = async function (req, res) {
    let id = parseId(req.params.id)
    if (id != null) {
        employeeController.delete(res, id);
    } else {
        badRequest(res);
    }
}