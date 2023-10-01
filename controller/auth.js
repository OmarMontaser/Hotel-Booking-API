const User = require('../model/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var Logger = require('../services/logger')

const logger = new Logger('hotels')


const register = async(req,res,next)=>{

    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const user = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            });
            await user.save();
            logger.info('save user' , user) ;

        res.status(200).json('User registered successfully');
        
        } catch (error) {
          logger.error('Return Error') ;
        next(error);
        }
        }
       

const login = async (req, res, next) => {
    const { email, password } = req.body;
          
         try {
          if (!email || !password) {
             return res.status(400).json('Provide email and password');
            }
            
            const user = await User.findOne({ email });
            
            if (!user) {
              return res.status(404).json('Email not found');
            }
            
            const isPasswordValid = bcrypt.compare(password, user.password);
            
            if (!isPasswordValid) {
              return res.status(401).json('Incorrect password');
            }
            
            const token = jwt.sign(
              {
                id: user._id,
                isAdmin: user.isAdmin
              },
              process.env.SECRET_KEY
            );
            
            const { password: password1, isAdmin, ...others } = user._doc;
            
            res.cookie('access_token', token, {
              httpOnly: true,
            });
            
            return res.status(200).json({ ...others });
          } catch (error) {
            next(error);
          }
        };
        


          

module.exports = { register, login }