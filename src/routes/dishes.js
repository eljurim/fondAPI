const express = require('express')
const router = express.Router()
const dish = require('../usecases/dishes')



router.get('/', async (req, res)=>{
    const dishes = await  dish.get()
     res.json({
         success:true,
         message:" Exitoso get Dishes",
         payload:{
             dishes
         }
     })
 })
 
 
 router.post('/', async (req, res)=>{
 
     try {
         let newDish = await  dish.create(req.body)
         res.json({
             success:true,
             message:" Plato agregado con exito",
             payload:{
                 newDish
             }
         })
     } catch (error) {
         res.json({
             success:false,
             message:" Plato No agregado",
             error:error
         }) 
     }
 
  })
 
  router.delete('/:id', async (req, res)=>{
 
     try {
         const { id } = req.params
         const dishDeleted = await dish.del(id)
         res.json({
             success:true,
             message:" El plato fue borrado",
             payload:{
                 dishDeleted
             }
         })
     } catch (error) {
         res.status(400)
         res.json({
             success:false,
             message:" No fue borrado",
         })
     }
    
 })
 


module.exports = router