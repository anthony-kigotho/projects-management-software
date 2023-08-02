const express = require ('express')
require('dotenv').config()
const app = express()
const {dbConnection} = require('./backend/config/db')
const DB = require('./backend/database/dbHelpers')
const userRouter = require('./backend/routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// error handling middleware
app.use((err, req, res, next)=>{
    res.json({Error: err})
})


app.use('/api/v1/users', userRouter)

app.listen(process.env.PORT, async() => {
    await dbConnection()
    console.log(`Server is running on port ${process.env.PORT}`)
})
