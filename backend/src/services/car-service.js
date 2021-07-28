function brandFilter(brand){
    brand = brand.toLowerCase()
    return function(car){
        return car.brand.toLowerCase().search(brand) >= 0
    }
}

class CarService {

    constructor() {
        this.cars = []
        this.id = 0
    }

    add(car) {
        car.id = this.id++
        this.cars.push(car)
        return car
    }

    update(id, newCar) {
        newCar.id = id
        for (var i in this.cars) {
            if (this.cars[i].id == id) {
                this.cars[i] = newCar
                return newCar
            }
        }
        return null
    }

    find(id) {
        return this.cars.find((car) => car.id == id)
    }

    findAll(limit, brand) {
        var cars = this.cars
        if (brand != null) {
            cars = cars.filter(brandFilter(brand))
        }
        if(limit != null){
            cars = cars.slice(0, limit) 
        }
        return cars
    }

    remove(id) {
        for (var i in this.cars) {
            if (this.cars[i].id == id) {
                return this.cars.splice(i, 1)
            }
        }
        return null
    }

}

module.exports = CarService