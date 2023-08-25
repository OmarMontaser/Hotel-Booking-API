require('dotenv').config() 
const express = require('express')
const session = require('express-session')
const passport = require('passport')

const app = express() ;

const cookieParser = require('cookie-parser')

//connect to db
const connect = require('./db/connect')


//Routes
const authRoute = require('./route/auth')
const hotelsRoute = require('./route/hotels')
const roomsRoute = require('./route/rooms')
const authGoogle = require('./route/oauth')

//MiddleWare 

app.use(express.json()) ;
app.use(cookieParser())
app.use(session( {secret:process.env.SESSION_SECRET, resave:true ,saveUninitialized:true }));
app.use(passport.initialize()) ;
app.use(passport.session()) ;



app.use('/api/auth' , authRoute) ;
app.use('/api/hotels' , hotelsRoute) ;
app.use('/api/room' , roomsRoute) ;
app.use('/api/oauth' , authGoogle) ;

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