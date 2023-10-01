const router = require('express').Router() ;
//const passport = require('../controller/oauthGoogle.');



//redirect user to google for auth
router.get('/google' , 
        passport.authenticate('google' ,{scope: ['profile' , 'email'] })
);


// callback router after google auth 
router.get('https://localhost:3000/oauth/callback'  ,
        passport.authenticate('google', {failureRedirect:'/'}),
        (req , res) =>{
            res.redirect('/profile') ;
        }
);

module.exports = router ;

