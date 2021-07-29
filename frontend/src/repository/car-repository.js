import axios from "axios"

const URL = process.env.VUE_APP_BACKEND_URL + "/cars"

async function add(car) {
    return (await (axios.post(URL, car))).data
}

async function update(id, car) {
    return (await (axios.put(URL + "/" + id, car))).data
}

async function getAll(limit, brand) {
    var config = {
        params:{
            limit, brand
        }
    }
    return (await (axios.get(URL, config))).data
}

async function get(id) {
    return (await (axios.get(URL + "/" + id))).data
}

async function remove(id) {
    return (await (axios.delete(URL + "/" + id))).data
}

export default {
    add, update, getAll, get, remove
}