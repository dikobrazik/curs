/**
 * GroupsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            gNum : req.param('some_data').gNum,
            content : req.param('some_data').content,
        };
        Groups.create(elem).exec(function (err, groups) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            return res.ok();
            
        });
        //res.redirect('/');
    },

    list: function(req,res){
        Groups.find()
            .exec(function (err, groups) {
                return res.send(groups.map((item)=>{
                    return item.gNum
                }));
                if (err) return res.send(500);
            });
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

