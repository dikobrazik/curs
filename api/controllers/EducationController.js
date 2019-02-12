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
            if(err) return res.sendStatus(500);
            return res.ok();
        });
            
    },
    //расписание определенной группы
    timetable:function(req, res){
        if(req.headers['user-agent'] === 'mobile-app'){
            return res.send(req);
        }
        Education
            .findOne({gNum:req.param('index')})
            .exec(function (err, data) {
                if (err) return res.send(500);
                if (!data) return res.send(204);
                return res.send(data.content);
            });
    },
    //группы которым преподает данный препод
    teacherGroups:function(req, res){
        if(req.headers['user-agent'] === 'mobile-app'){
            //return res.send(req);
        }
        Education
            .find()
            .exec(function (err, data) {
                if (err) return res.send(500);
              let prom = new Promise((resolve) => {
                let user = _getUser();
                resolve(user);
              });
              prom.then(user=>{
                let groups = [];
                data.forEach(item=>{
                  console.log(item.content.split('],['));
                        if(item.content.includes(user.name+' '+user.surname)) groups.push({name:item.gNum});
                    });
                return res.send(groups);
                },err=>{
                    console.log(err)
                });
            });
      let _getUser = async () => {
        return await User.findOne({id: req.param('id')});
      }
    },
    index: function (req, res) {
        res.view();
    }

};

