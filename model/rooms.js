const mongoose = require('mongoose')

const RoomsSchema = new mongoose.Schema({

    title:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true
    },
    description:{
        type: String , 
        required: true
    },
    rommsNumber:{
        type: [{ number: Number , unavilableDaates: {type: [Date] } }] 
    },
    
}, {timestamps: true} 

)

module.exports = mongoose.model('Rooms' , RoomsSchema)