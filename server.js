require('dotenv').config() 
const express = require('express')
const app = express() ;

const cookieParser = require('cookie-parser')

//connect to db
const connect = require('./db/connect')


//Routes
const authRoute = require('./route/auth')
const hotelsRoute = require('./route/hotels')
const roomsRoute = require('./route/rooms')

//MiddleWare 

app.use(express.json()) ;
app.use(cookieParser())

app.use('/api/auth' , authRoute) ;
app.use('/api/hotels' , hotelsRoute) ;
app.use('/api/room' , roomsRoute) ;

const PORT = 3000 || process.env.PORT

const start = async() =>{
    try{
        await connect(process.env.MONGO_URI) ; 
        app.listen(PORT , console.log(`server is running on port ${PORT}`))
    }catch(err){
        console.log(err); 
    }
}

start()