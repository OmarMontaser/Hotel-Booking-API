const express = require('express')
const router = express.Router() ;
const {
        createRoom,
        deleteRoom,
        updateRoom,
        getRoom,
        getAllRoom,
        getHotelRooms,

      }  = require('../controller/rooms')

const {verifyAdmin} = require('../utils/VerifyToken')



//Create
router.post('/:hotelid', verifyAdmin , createRoom) ;

//Update
router.put('/:id' , verifyAdmin , updateRoom)

//Delete
router.delete('/:id/:hotelid' , verifyAdmin , deleteRoom)

//GEt
router.get('/:id' , getRoom)

//GEt All
router.get('/' , getAllRoom)

router.get('/rooms/:id' , getHotelRooms)

module.exports = router