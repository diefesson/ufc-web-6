import axios from "axios"
import processResponse from "./process-response"

const URL = process.env.VUE_APP_BACKEND_URL + "/employees"

async function add(employee) {
    return await processResponse(axios.post(URL, employee))
}

async function update(id, employee) {
    let url = URL + "/" + id
    return await processResponse(axios.put(url, employee))
}

async function findAll(limit, role) {
    var config = {
        params:{
            limit, role
        }
    }
    return await processResponse(axios.get(URL, config))
}

async function find(id) {
    let url = URL + "/" + id
    return await processResponse(axios.get(url))
}

async function remove(id) {
    let url = URL + "/" + id
    return await processResponse(axios.delete(url))
}

export default {
    add, update, findAll, find, remove
}