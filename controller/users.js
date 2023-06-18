const User = require('../model/users')

//Create 
const CreateUser = async(req , res ,next)=>{

    const newUser =  new User(req.body)
        
    try{
        const savedUser = await newUser.save() ;
        res.status(200).json(savedUser) ;

    }catch(err){
        res.status(500).json(err)
    }
}

// Update 
const UpdateUser = async(req ,res,next)=>{
        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true})
                res.status(200).json(updateUser) ;
        }catch(err){
            res.status(500).json(err)
        }
}

//Delete 
const DeleteUser = async (req ,res,next)=>{
    try{
         await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted') ;

    }catch(err){
        res.status(500).json(err)
    }
}

//Get 
const GetUser = async (req ,res,next)=>{
    try{
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
}

//Get All 
const GetAllUser = async (req ,res,next)=>{
    try{
    const user = await User.find();
    res.status(200).json(user) ;
    }catch(err){
        res.status(500),json(err)
    }
}

module.exports = {
    CreateUser,
    UpdateUser,
    DeleteUser,
    GetUser,
    GetAllUser
    };