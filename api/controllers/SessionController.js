/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var crypto = require('crypto');

module.exports = {
    create: function (req, res) {
        var username = req.param('username'),
            password = req.param('password');
        if (!username || !password) {
            return res.redirect('/login');
        };
        if (req.session.auth) {
            return res.redirect('/admin');
        };
        User.find({username:username}).exec(function (err, user) {
            if (!user || err) return res.sendStatus(500);
            var hash = crypto.createHash('sha256', password);
            var hHash = hash.digest('hex');
            if (hHash == user[0].password) {
                req.session.auth = true;
                req.session.User = user;
                console.log(req.session);
                if (req.session.User[0].admin) {
                    return res.redirect('/admin');
                };
            }else{res.redirect('/login');}
        });
    },
    destroy: function (req, res) {
        console.log(req.session.User);
        User.findOne(req.session.User).exec(function (err, user) {
            if (user) {
                req.session.destroy();
                res.redirect('/');
            } else { res.redirect('/login'); };
        });
    },

    // @MAIN

    index: function (req, res) {
        if(req.session.auth){
            return res.redirect('/admin');
        }
        return res.view();
    }
};



