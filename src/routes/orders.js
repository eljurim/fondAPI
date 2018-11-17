const express = require('express')
const router = express.Router()
const order = require('../usecases/orders')



router.get('/', async (req, res)=>{
    const allOrders = await order.get()
    res.json({
        success:true,
        message:" GET devuelto correctamente",
        payload: {
            orders: allOrders}
    })
 })
 
 
 router.post('/', async (req, res)=>{
     order.create(req.body)
    res.json({
        success:true,
        message:" POST devuelto correctamente"
    })
  })
 
  router.delete('/', async (req, res)=>{
    res.json({
        success:true,
        message:" DELETE devuelto correctamente"
    })
 })
 


module.exports = router