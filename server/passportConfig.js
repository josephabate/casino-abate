const User = require('./user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;


module.exports = (passport) => {
    passport.use(
        new localStrategy((email, password, done) => {
            User.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                else if (!user) return done(null, false);
                else {
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
        cb(null, user.id);
    })
    passport.deserializeUser((id,cb) =>{
        User.findOne({_id: id}, (err,user)=>{
            cd(err, user);
        })
    })
};