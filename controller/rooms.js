const Rooms = require('../model/rooms')
const Hotel = require('../model/hotels')

const createRoom = async(req ,res, next)=>{
    
    const hotelId = req.params.hotelid
    const newRoom = new Rooms(req.body)

    try{
        const saveRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push : {rooms: saveRoom._id}
            })

        }catch(err){
            res.status(500).json(err)
        }

        res.status(200).json(saveRoom)

    }catch(err){
       res.status(500).json(err) 
    }
}

const updateRoom = async (req ,res , next)=>{

    try{
        const updateRoom = await Rooms.findByIdAndUpdate(
            req.params.id , 
            {$set : req.body},
            {new : true}
        );
            res.status(200).json(updateRoom)

    }catch(err){
        res.status(500).json(err)
    }

}


const deleteRoom = async (req, res, next)=>{
    try{
        await Rooms.findByIdAndDelete(req.params.id)
        res.status(200).json("Room has been Deleted")
    }catch(err){
        res.status(500).json(err)
    }
}

const getRoom = async (req, res,next)=>{
    try{
        const room = await  findById(req.params.id)
        res.status(200).json(room);

    }catch(err){
        res.status(500).json(err)
    }
}

const getAllRoom = async(req,res,next)=>{
    try{
        const rooms = await Rooms.find()
        re.status(200).json(rooms)
    }catch(err){
        res.status(500).json(err)
    }
}

const getHotelRooms = async(req ,res ,next)=>{

    try{
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(
            hotel.rooms.map(room=>{
            return Rooms.findById(room);
        })
      )
      res.status(200).json(list) ;
    }catch(err){
        res.status(500).json(err) ;
    }
}




module.exports = {
        createRoom,
        updateRoom,
        deleteRoom,
        getRoom,
        getAllRoom,
        getHotelRooms
        }