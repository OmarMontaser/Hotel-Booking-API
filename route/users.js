const express = require('express')
const router = express.Router() ;


const {verifyUser , verifyAdmin , verifyToken}  = require('../utils/VerifyToken');

const {
        DeleteUser,
        UpdateUser,
        GetUser,
        GetAllUser
      }  = require('../controller/users') ;



router.get('/checkauthentication' , verifyToken , (req ,res)=>{
      res.send('hello you are authentcatied')
})
  
router.get('/checkuser/:id' , verifyUser , (req ,res)=>{
      res.send('hello, you are logged in and you can delete your account')
})


// Update
router.put('/:id', verifyUser, UpdateUser);

//Delete
router.delete('/:id' ,verifyUser , DeleteUser)

//GEt
router.get('/:id',verifyUser , GetUser)

//GEt All
router.get('/',verifyAdmin , GetAllUser)


module.exports = router