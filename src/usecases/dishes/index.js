const Dish = require('../../models/dish').model

async function get() {
    const allDishes = await Dish.find({}).exec()
    return allDishes
}
async function getById(id) {
    return Dish.findById(id).exec()
}

async function create(dishData) {

    const {
        name
    } = dishData
    const existingDishes = await Dish.find({
        name
    })
    const dishExists = existingDishes.length > 0
    if (dishExists) throw new Error('El platillo ya existe')

    const addedDish = new Dish(dishData);
    const dishCreated = await addedDish.save()
    return dishCreated
}

function del(id) {
    return Dish.findByIdAndDelete(id).exec()
}

module.exports = {
    get,
    create,
    del,
    getById
}