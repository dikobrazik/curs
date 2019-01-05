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
    deleteElement: function(req, res){
        Groups.find().exec(function(err, groups){
            let content = JSON.parse(groups[req.param('gNum')].content);
            content.splice(req.param('index'), 1);
            Groups.update(groups[req.param('gNum')].id, {content:JSON.stringify(content)}).exec(function(err){
                if(err){
                    console.log(err);
                    return res.sendStatus(500);
                } 
                return res.ok();
            });
        });
        /*Groups.update().exec(function(err){
            if(err) return res.send(500);
            return res.ok();
        });*/
    },
    list: function(req,res){
        Groups.find()
            .exec(function (err, groups) {
                return res.send(groups);
                if (err) return res.send(500);
            });
    },

    // @MAIN
    index: function (req, res) {
        res.view();
    }

};

