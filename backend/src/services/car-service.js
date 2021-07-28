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
        console.log(this.cars.find)
        return this.cars.find((car) => car.id == id)
    }

    findAll() {
        return this.cars
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