const Hotel = require('../model/hotels')
const Room = require('../model/rooms')
var Logger = require('../services/logger')

const logger = new Logger('hotels')

//Create 
const CreateHotel = async(req , res ,next)=>{

    const newHotel =  new Hotel(req.body)
        
    try{
        const savedHotel = await newHotel.save() ;
        logger.info('Return Created Hotel' , savedHotel) ;

        res.status(200).json(savedHotel) ;

    }catch(err){
        logger.error('Return Error' , err) ;

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
                logger.info('Update Hotel' , updateHotel) ;

                res.status(200).json(updateHotel) ;
        }catch(err){
            logger.error('Return err' , err) ;

            res.status(500).json(err)
        }
}

//Delete 
const DeleteHotel = async (req ,res,next)=>{
    try{
         await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted') ;

    }catch(err){
        logger.error('Return error'  , err) ;

        res.status(500).json(err)
    }
}

//Get 
const GetHotel = async (req ,res,next)=>{
    try{
    const hotel = await Hotel.findById(req.params.id)
    logger.info('get Hotel' , hotel) ;
    res.status(200).json(hotel);
    }catch(err){
        logger.error('Return error' , hotel) ;

        res.status(500).json(err)
    }
}

//Get All 
const GetAllHotel = async (req ,res,next)=>{
        const query = req.query;
        const limit = query.limit || 10;
        const page =  query.page  || 1 ;
        const skip = (page-1) * limit ;
    try{
       const hotel = await Hotel.find({} , {"__v":false})
        .limit(limit)
        .skip(skip);
    logger.info('Return All Hotel' , hotel) ;
    res.status(200).json(hotel) ;

    }catch(err){
        logger.error('Return Error')
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
        logger.info('return list ' , list)
        res.status(200).json(list);
    } catch (err) {
        logger.error('return error' , err)
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