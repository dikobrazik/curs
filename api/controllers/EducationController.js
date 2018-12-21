/**
 * EducationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    update: async function (req, res) {
        console.log(req.param('data'));
        var Id = await Education.findOrCreate({
            gNum:req.param('data').gNum,
        },{
            gNum : req.param('data').gNum,
            content : req.param('data').content,
        });
        var elem = {
            content:req.param('data').content,
        };
        Education.update(Id.id,elem).exec(function(err){
            if(err) return res.send(500);
            return res.ok();
        });
            
    },
    list:function(req, res){
        Education
            .findOne({gNum:req.param('index')})
            .exec(function (err, data) {
                console.log();
                return res.send(data.content);
                if (err) return res.send(500);
            });
    },
    index: function (req, res) {
        res.view();
    }

};

