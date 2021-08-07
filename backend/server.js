import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/basket/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use((req, res, next)=> {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000 

app.listen(
        PORT, 
        console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
        )
