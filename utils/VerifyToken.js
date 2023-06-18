const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) {
    return res.status(401).json('You are not authorized');
  }
  
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json('You are not authorized');
    }
    
    req.user = user;
    next();
  });
};


const verifyUser = (req ,res ,next)=>{
    verifyToken(req ,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next() ;
        }else{
            return res.status(403 , "you are not authorized")
        }
    })
}

const verifyAdmin = (req ,res ,next)=>{
  verifyToken(req ,res, ()=>{
      if(req.user.isAdmin){
          next() ;
      }else{
          return res.status(403 , "you are not authorized")
      }
  })
}



module.exports = {verifyToken , verifyUser , verifyAdmin };
