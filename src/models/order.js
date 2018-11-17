const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    dishes: {
        type: [String],
        required: true,
        minlength: 1
    },

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20
    },
    status:{
        type:String,
        required:true,
        enum:[
            'active',
            'sent',
            'approved',
            'preparing',
            'ready',
            'dispatched',
            'payed',
            'cancelled'
        ]
    }
})
//esto da error porque se debe ejecutar una sola vez
// const model = Model(schema)
module.exports = {
    model: mongoose.model('Order', schema),
    schema
}