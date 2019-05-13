/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const crypto = require('crypto');

module.exports = {
    create: function (req, res) {
        var elem = {
            name : req.param('data').name,
            surname : req.param('data').surname,
            username : req.param('data').username,
            password : req.param('data').password,
            //admin    : req.param('admin')
        };
        if(elem.password.length > 0 && elem.password.length < 5){
            console.log('daa');
            return res.status(200).send('Short password.');
        } 
        User.create(elem).exec(function (err, user) {
            console.log(err);
            if (err) return res.sendStatus(500);
            res.ok();
        });
    },
    list: function(req,res){
        User.find(
                {username: { '!=' : ['admin'] }}
            )
            .exec(function (err, users) {
                return res.send(users);
                if (err) return res.send(500);
            });
    },

    delete:  async function(req, res){
        var Id = await User.find({
            name:req.param('data').name,
            surname:req.param('data').surname,
            username:req.param('data').username
        });
        User.destroy(Id[0].id).exec(function (err) {
            if (err) return res.sendStatus(500);
            return res.ok();
        });

    },
    update: async function (req, res) {
        var Id = await User.find({
            name:req.param('data').name,
            surname:req.param('data').surname,
            username:req.param('data').username
        });
        var elem = {
            name:req.param('ndata').name,
            surname:req.param('ndata').surname,
            username:req.param('ndata').username,
            password:req.param('ndata').password
        };
        console.log(Id[0].id);
        if(elem.password.length > 0 && elem.password.length < 5){
            console.log('daa');
            return res.status(200).send('Short password.');
        } 
        if(!elem.password){
            console.log('password field empty');
            delete elem.password;
            User.update(Id[0].id, elem).exec(function (err) {
                if (err) return res.send(500);
                return res.ok();
            });
        }else{
            console.log('password field not empty');
            console.log(elem.password);
            let mainPass = crypto.createHash('sha256');
            mainPass.update(elem.password);
            let hash = mainPass.digest('hex');
            if(Id[0].password != hash){
                elem.password = hash;
                User.update(Id[0].id, elem).exec(function (err) {
                    if (err) return res.send(500);
                    return res.ok();
                });
            }
        }
        /*User.find(Id[0].id).exec(function (err) {
            if (err) return res.send(500);
            return res.ok();
        });*/
            
    },
    info: function(req, res){
        User.find(
            {id: req.param('userId')}
        )
        .exec(function (err, users) {
            return res.send(users);
            if (err) return res.send(500);
        });
    },
    // @MAIN
    index: function (req, res) {
        res.view();
    }

};

