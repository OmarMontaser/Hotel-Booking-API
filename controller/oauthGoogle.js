const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy ;



passport.use(new GoogleStrategy({
    clientID: process.env.Client_ID,
    clientSecret: process.env.Client_Secret,
    callbackURL: process.env.CallbackURL,
    scope: ['profile' , 'email']
},
   (accessToken , refreshToken , profile , done) =>{
    return done (null , profile) ;   
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport 
