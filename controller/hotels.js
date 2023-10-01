const Hotel = require('../model/hotels')
const Room = require('../model/rooms')

var Logger = require('../services/logger')

const logger = new Logger('hotels')

//Create 
const CreateHotel = async(req , res ,next)=>{

    const newHotel =  new Hotel(req.body)
        
    try{
        const savedHotel = await newHotel.save() ;
        res.status(200).json(savedHotel) ;
        logger.info('return New Hotel' , savedHotel) ;

    }catch(err){
        res.status(500).json(err)
    }
}

// Update 
const UpdateHotel = async(req ,res,next)=>{
        try{
            const updateHotel = await Hotel.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true})
                res.status(200).json(updateHotel) ;
        }catch(err){
            res.status(500).json(err)
        }
}

//Delete 
const DeleteHotel = async (req ,res,next)=>{
    try{
         await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted') ;

    }catch(err){
        res.status(500).json(err)
    }
}

//Get 
const GetHotel = async (req ,res,next)=>{
    try{
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err)
    }
}

//Get All 
const GetAllHotel = async (req ,res,next)=>{
    try{
    const hotel = await Hotel.find();
    logger.info('Return All Hotel' , hotel) ;
    res.status(200).json(hotel) ;

    }catch(err){
        res.status(500).json(err)
    }
}

// count cities in data saved in database
const countByCity = async (req, res, next) => {
    let cities = [];

    if (req.query.cities) {
        cities = req.query.cities.split(",");
    }

    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city });
        }));

        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
};



module.exports = {
    CreateHotel,
    UpdateHotel,
    DeleteHotel,
    GetHotel,
    GetAllHotel,
    countByCity,
    };