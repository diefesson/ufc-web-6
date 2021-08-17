const { notFound, successResponse } = require("../util/response-util")
const employeeRepository = require("../repositories/employee-repository")

exports.post = async function (res, employee) {
    successResponse(res, await employeeRepository.add(employee));
}

exports.put = async function (res, id, employee) {
    let newEmployee = await employeeRepository.update(id, employee);
    if (newEmployee == null) {
        notFound(res);
    } else {
        successResponse(res, await employeeRepository.update(id, employee));
    }
}

exports.get = async function (res, limit, role) {
    successResponse(res, await employeeRepository.findAll(limit, role));
}

exports.getById = async function (res, id) {
    employee = await employeeRepository.find(id)
    if (employee == null) {
        notFound(res);
    } else {
        successResponse(res, employee)
    }
}

exports.delete = async function (res, id) {
    employee = await employeeRepository.remove(id)
    if (employee = null) {
        notFound(res)
    } else {
        successResponse(res, employee)
    }
}