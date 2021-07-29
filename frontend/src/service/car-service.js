import carRepository from "../repository/car-repository";

async function add(car){
    return await carRepository.add(car)
}

async function update(id, car){
    return await carRepository.update(id, car)
}

async function get(id){
    return await carRepository.get(id)
}

async function getAll(limit, brand){
    return await carRepository.getAll(limit, brand)
}

async function remove(id){
    return await carRepository.remove(id)
}

export default{
    add, update, get, getAll, remove
}