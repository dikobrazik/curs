/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            name : req.param('data').name,
            surname : req.param('data').surname,
            username : req.param('data').username,
            password : req.param('data').password,
            //admin    : req.param('admin')
        };

        User.create(elem).exec(function (err, user) {
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
            password:req.parma('ndata').password
        };
        console.log(Id[0].id);
        /*User.update(Id[0].id, elem).exec(function (err) {
            if (err) return res.send(500);
            return res.ok();
        });*/
            
    },
    // @MAIN
    index: function (req, res) {
        res.view();
    }

};

