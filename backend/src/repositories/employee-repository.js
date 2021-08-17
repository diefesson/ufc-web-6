const format = require("pg-format")

const Employee = require("../models/employee")
const pool = require("./pool")

function rowToEmployee(row) {
    return new Employee(
        row.id,
        row.name,
        row.role,
        row.birthday,
        row.admission_day
    )
}

exports.findAll = async function (limit, role) {
    sql = "select * from employees ";
    params = [];
    if (role != null) {
        sql += "where lower(role) like lower(concat('%', %L, '%')) ";
        params.push(role);
    }
    if (limit != null) {
        sql += "limit %L"
        params.push(limit)
    }
    sql = format(sql, ...params);
    rows = (await pool.query(sql)).rows;
    return rows.map(rowToEmployee);
}

exports.find = async function (employeeId) {
    sql = format("select * from employees where id=%L", employeeId);
    rows = (await pool.query(sql)).rows;
    return rows.map(rowToEmployee)[0]
}

exports.add = async function (employee) {
    sql = format(
        "insert into employees(name, role, birthday, admission_day) values (%L, %L, %L, %L) returning *",
        employee.name,
        employee.role,
        employee.birthday,
        employee.admissionDay
    );
    rows = (await pool.query(sql)).rows;
    return rows.map(rowToEmployee)[0]
}

exports.update = async function (id, employee) {
    sql = format(
        "update employees set name=%L, role=%L, birthday=%L, admission_day=%L where id=%L returning *",
        employee.name,
        employee.role,
        employee.birthday,
        employee.admissionDay,
        id
    );
    rows = (await pool.query(sql)).rows;
    return rows.map(rowToEmployee)[0];
}

exports.remove = async function (id) {
    sql = format("delete from employees where id=%L returning *", id);
    rows = (await pool.query(sql)).rows;
    return rows.map(rowToEmployee)[0];
}