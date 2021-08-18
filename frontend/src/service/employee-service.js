import employeeRepository from "../repository/employee-repository";

async function add(employee){
    return await employeeRepository.add(employee)
}

async function update(id, employee){
    return await employeeRepository.update(id, employee)
}

async function find(id){
    return await employeeRepository.get(id)
}

async function findAll(limit, brand){
    return await employeeRepository.findAll(limit, brand)
}

async function remove(id){
    return await employeeRepository.remove(id)
}

export default{
    add, update, find, findAll, remove
}