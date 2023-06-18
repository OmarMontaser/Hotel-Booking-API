const express = require('express')
const router = express.Router() ;
const {
        CreateHotel,
        DeleteHotel,
        UpdateHotel,
        GetHotel,
        GetAllHotel,
        countByCity,
      }  = require('../controller/hotels')

const {verifyAdmin} = require('../utils/VerifyToken')



//Create
router.post('/', verifyAdmin , CreateHotel) ;

//Update
router.put('/:id' , verifyAdmin , UpdateHotel)

//Delete
router.delete('/:id' , verifyAdmin , DeleteHotel)

//GEt
router.get('/find/:id' , GetHotel)

//GEt All
router.get('/' , GetAllHotel)

//count hotels in cites
router.get('/countByCity' , countByCity)




module.exports = router