const Order = require('../../models/order').model
const dish = require('../dishes/')
// otra manera de deconstruirlo
// const { model: Orders } = require('../../models/order')

// async function get () {
// const allOrders = await Order.find({}).exec()
// }

const get = () => Order.find({}).exec()


const create = async (orderData) => {
    const {
        dishes = []
    } = orderData

    const dishPromises = dishes.map((dishID) => {
        return dish.getById(dishID)
    })

    const dishPromiseResult = await Promise.all(dishPromises)

    const invalidDishes = dishPromiseResult.reduce((reducer, current, index) => {
        if (current == null) return [...reducer, dishes[index]]
        return reducer
    }, [])

    if (invalidDishes.length > 0) throw new Error(`Invalid Dishes: ${ invalidDishes.join(',') } `)

    const newOrder = new Order(orderData)
    return newOrder.save()

}

module.exports = {
    get,
    create
}