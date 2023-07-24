import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import pizzaRoutes from './routes/pizza.js'
import ingRoutes from './routes/ing.js'


dotenv.config()
const app = express()
app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))
app.use(cors())

app.listen(8080,()=>{
    console.log("server started");
})

app.get('/',(req,res)=>{
    res.send("Hi i am index.js of backend")
})

app.use('/pizzas',pizzaRoutes)
app.use('/ing',ingRoutes)



mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("db connected"))
    .catch((error)=>console.log(error))