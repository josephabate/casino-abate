const User = require('./user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;


module.exports = (passport) => {
    passport.use(
        //NEED <usernameField & paswordField> or else you will have "[0] { message: 'Missing credentials' }"
        new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
            User.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                else if (!user) return done(null, false);
                else {
                    console.log(user);
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err) throw err;
                        else if (result) {
                            return done(null, user);
                        } else {
                            return done(null, false);
                        }
                    })
                }
            })
        })
    )

    passport.serializeUser((user,cb)=>{
        console.log("OBER HERE")
        cb(null, user.id);
    })
    passport.deserializeUser((id,cb) =>{
        User.findOne({_id: id}, (err,user)=>{
            cd(err, user);
        })
    })
};