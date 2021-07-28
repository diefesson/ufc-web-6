const Car = require("../models/car")
const CarService = require("../services/car-service")

const carService = new CarService()

exports.post = (req, res) => {
    res.json(carService.add(new Car(
        req.body.name,
        req.body.brand,
        req.body.manufactureYear,
        req.body.modelYear,
        req.body.sellDate
    )))
}

exports.put = (req, res) => {
    res.json(carService.update(Number(req.params.id), new Car(
        req.body.name,
        req.body.brand,
        req.body.manufactureYear,
        req.body.modelYear,
        req.body.sellDate
    )))
}

exports.get = (req, res) => {
    var limit = req.query.limit
    var brand = req.query.brand
    res.json(carService.findAll(limit, brand))
}

exports.getById = (req, res) => {
    res.json(carService.find(req.params.id))
}

exports.delete = (req, res) => {
    res.json(carService.remove(req.params.id))
}