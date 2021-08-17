const employeeController = require("../controllers/employee-controller");
const {badRequest} = require("../util/response-util")
const Employee = require("../models/employee");

const defaultLimit = 10;

function validLimit(limit) {
    if (limit == null) {
        return defaultLimit;
    }
    limit = Number(limit)
    if (isNaN(limit)) {
        return null;
    }
    limit = Math.min(limit, 20);
    limit = Math.max(limit, 1);
}

function validId(id) {
    if (id == null) {
        return null;
    }
    id = Number(id)
    if (isNaN(id)) {
        return null;
    }
    if (id < 0) {
        return null;
    }
    return id;
}

exports.get = async function (req, res) {
    let limit = validLimit(req.query.limit)
    let role = req.query.role
    if(limit == null){
        badRequest(res)
    }
    employeeController.get(res, limit, role)
}

exports.getById = async function (req, res) {
    let id = validId(req.query.id)
    if(id == null){
        badRequest(res)
    }
    employeeController.getById(res, id)
}

exports.post = async function (req, res) {
    employee = Employee(
        req.query.id,
        req.query.name,
        req.query.role,
        req.query.birthday,
        req.query.admimissionDay,
    )
    if(employee.isValid()){
        employeeController.post(res, employee)
    } else {
        badRequest(res)
    }
}

exports.put = async function (req, res) {
    id = validId(req.query.id)
    employee = Employee(
        req.query.id,
        req.query.name,
        req.query.role,
        req.query.birthday,
        req.query.admimissionDay,
    )
    if(id != null && employee.isValid()){
        employeeController.put(res, employee)
    } else {
        badRequest(res)
    }
}

exports.delete = async function (req, res) {
    id = validId(req.query.id)
    if(id != null){
        employeeController.delete(res, id)
    } else {
        badRequest(res)
    }
}