

import express from 'express'
// import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import cors from "cors"
import authRoute from './routes/authRoute.js'
// import catagoriRoute from './routes/catagoriRoute.js'
// import productRoute from './routes/productRoute.js'





const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use(morgan('dev'))
 app.use(cors())

app.use('/api/v1/auth',authRoute)
// app.use('/api/v1/catagori',catagoriRoute) 
// app.use('/api/v1/product' , productRoute)


app.use('/hello' , (req , res)=>{
   try {
    res.send('<h1>hello from the server</h1>')

   } catch (error) {
    console.log('fail to connet')
   }
})

const PORT = process.env.PORT

app.listen(PORT , (req , res)=>{
console.log(`the server successfully connected to port ${PORT} `)
} )