/**
 * GroupsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var elem = {
            gNum : req.param('data').gNum,
            content : req.param('data').content,
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
            let content = JSON.parse(groups[req.param('data').gNum].content);
            content.splice(req.param('data').index, 1);
            Groups.update(groups[req.param('data').gNum].id, {content:JSON.stringify(content)}).exec(function(err){
                if(err){
                    console.log(err);
                    return res.sendStatus(500);
                } 
                return res.ok();
            });
        });
    },
    update: async function(req, res){
        console.log(req.param('data'))
        let updated = await Groups
            .update({gNum:req.param('data').gNum})
            .set({content:req.param('data').content})
            .fetch();
        console.log(updated)
        return res.ok();
    },
    list: function(req, res){
        if(req.param('index')){
            Groups.find({gNum:req.param('index')})
                .exec(function (err, groups) {
                    if(req.param('day')){
                        console.log(groups)
                    }
                    if (err) return res.send(500);
                    return res.send(groups);
                });
        }else{
            Groups.find()
            .exec(function (err, groups) {
                if (err) return res.send(500);
                return res.send(groups);
            });
        }
    },

    // @MAIN
    index: function (req, res) {
        res.view();
    }

};

