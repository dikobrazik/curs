/**
 * GroupsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            gNum : req.param('gNum'),
            content : req.param('content'),
        };
        Groups.create(elem).exec(function (err, groups) {
            console.log(err);
            if (err) return res.sendStatus(500);
        });
        //res.redirect('/');
    },

    list: function(req,res){

    },

    // @MAIN
    index: function (req, res) {
        /*Groups.find()
            .exec(function (err, groups) {
                if (err) return res.send(500);
                return res.view('/groups',{
                    groups: groups
                });
            <% groups.foreach(function (group) { %>
                <option><%= group.gNum %></option>
            <% }) %>
            });*/
        res.view({groups:{}});
    }

};

