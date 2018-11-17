const mongoose = require('mongoose')
const {Schema} = mongoose
const schema = new Schema({
    name:{
        require:true,
        type:String,
        trim: true,
        maxlength:25,
        minlength:1
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description:{
        type: String,
        required:true,
        default: '',
        maxlength:140
    }
})

// const model = Model(schema)
module.exports = { model: mongoose.model('Dish', schema), schema }