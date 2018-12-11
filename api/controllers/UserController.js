/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            username : req.param('username'),
            password : req.param('password'),
            admin    : req.param('admin')
        };

        User.create(elem).exec(function (err, user) {
            console.log(err);
            if (err) return res.sendStatus(500);
            req.session.auth = true;
            res.redirect('/');
        });
    },

    // @MAIN
    index: function (req, res) {
        res.view();
    }

};

