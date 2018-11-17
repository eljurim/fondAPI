const express = require('express')
// const dish = require('./usecases/dishes')
const app = express()
const dishesRoutes = require('./routes/dishes')
const ordersRoutes = require('./routes/orders')
app.use(express.json())
app.use('/dishes', dishesRoutes)
app.use('/orders', ordersRoutes)

app.get('/', (req, res)=>{
    res.json({
        success:true,
        message:"fondAPI running"
    })
    
})



//Se pasaron a routers
// app.get('/dishes', async (req, res)=>{
//    const dishes = await  dish.get()
//     res.json({
//         success:true,
//         message:" Exitoso get Dishes",
//         payload:{
//             dishes
//         }
//     })
// })


// app.post('/dishes', async (req, res)=>{

//     try {
//         let newDish = await  dish.create(req.body)
//         res.json({
//             success:true,
//             message:" Plato agregado con exito",
//             payload:{
//                 newDish
//             }
//         })
//     } catch (error) {
//         res.json({
//             success:false,
//             message:" Plato No agregado",
//             error:error
//         }) 
//     }

//  })

// app.delete('/dishes/:id', async (req, res)=>{

//     try {
//         const { id } = req.params
//         const dishDeleted = await dish.del(id)
//         res.json({
//             success:true,
//             message:" El plato fue borrado",
//             payload:{
//                 dishDeleted
//             }
//         })
//     } catch (error) {
//         res.status(400)
//         res.json({
//             success:false,
//             message:" No fue borrado",
//         })
//     }
   
// })

module.exports = app