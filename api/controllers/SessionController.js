/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var crypto = require('crypto');

module.exports = {
    create: async function (req, res) {
        var username = req.param('username'),
            password = req.param('password');
        if (!username || !password) {
            if(req.headers['user-agent'] == 'mobile-app') return res.status(204).send('No Content');
            return res.redirect('/login');
        };
        if (req.session.auth) {
            if(req.headers['user-agent'] == 'mobile-app') return res.status(208).send('Already Reported');
            return res.redirect('/groups');
        };
        try{
            let user = await User.findOne({username:username});
            if (!user) {
                if(req.headers['user-agent'] == 'mobile-app') return res.status(404).send('Not Found');
                return res.redirect('/login');
            }else{
                var hash = crypto.createHash('sha256');
                hash.update(password);
                var hHash = hash.digest('hex');
                if (hHash == user.password) {
                    req.session.auth = true;
                    req.session.User = user;
                    console.log(req.session);
                    if(req.headers['user-agent'] == 'mobile-app') res.send(req.session);
                    if (req.session.User.admin) {
                        return res.redirect('/groups');
                    }
                }else{
                    if(req.headers['user-agent'] == 'mobile-app') res.status(400).send('Password is wrong');
                    return res.redirect('/login');
                }
            }
        }catch(err){
            console.log(err)
        }
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

            return res.redirect('/groups');
        }
        console.log(sails.config.appUrl);
        return res.view();
    }
};



