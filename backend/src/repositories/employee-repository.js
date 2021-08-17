const format = require("pg-format")

const Employee = require("../models/employee")
const pool = require("./pool")

function rowToEmployee(row) {
    return Employee(
        id = row.id,
        name = row.name,
        role = row.role,
        birthday = row.birthday,
        adimissionDay = row.adimission_day
    )
}

exports.findAll = async function (limit, role) {
    sql = "select * from employees ";
    params = [];
    if (role != null) {
        sql += "where role=%L";
        params += role;
    }
    if (limit != null) {
        sql += "limit %L"
        params += limit
    }
    sql = format(sql, ...params);
    rows = await pool.query(sql);
    return rows.map(rowToEmployee);
}

exports.find = async function (employeeId) {
    sql = format("select * from employees where id=%L", employeeId);
    row = (await pool.query(sql))[0];
    return row ? rowToEmployee(row) : null;
}

exports.add = async function (employee) {
    sql = format(
        "insert into employees(name, role, birthday, admission_day) values (%L, %L, %L, %L) returning *",
        employee.name,
        employee.role,
        employee.birthday,
        employee.adimissionDay
    );
    row = (await pool.query(sql))[0];
    return rowToEmployee(row);
}

exports.update = async function (id, employee) {
    sql = format(
        "update employees set name=%L, role=%L, birthday=%L, admission_day=%L where id=%L returning *",
        employee.name,
        employee.role,
        employee.birthday,
        employee.adimissionDay,
        id
    );
    row = (await pool.query(sql))[0];
    return row ? rowToEmployee(row) : null;
}

exports.remove = async function (id) {
    sql = format("delete from employees where id=%L", id);
    row = (await pool.query(sql))[0];
    return row ? rowToEmployee(row) : null;
}