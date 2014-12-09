var passport = require('passport');


exports.authenticate=  function(req, res, next){
    var auth = passport.authenticate('local', function(err, user){
        //console.log('user: ', user);
        if(err){return next(err);}
        if(!user) {res.send({success:false, xx: true})}
        // if youre here, then user is found...
        // create session for user
        req.logIn(user, function(err){
            if(err){return next(err);}
            // else
            res.send({success:true, user: user});
        })
    });

    // you created the function, now run it.
    auth(req, res, next);
};

exports.requiresApiLogin = function(req, res, next){
    // check if user is authenticated.
    // only if yes, the next function will be called.
    if(!req.isAuthenticated()){
        res.status(403);
        res.end();
    } else {
        next();
    }

};

exports.requiresRole = function(role){
    return function(req, res, next){
        if(!req.isAuthenticated() || req.user.roles.indexOf(role)=== -1){
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
};