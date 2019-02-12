/**
 * EducationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    update: async function (req, res) {
        //return res.ok()
        /*var Id = await Education.findOrCreate({
            gNum:req.param('data').gNum,
        },{
            gNum : req.param('data').gNum,
            content : req.param('data').content,
        });
        var elem = {
            content:req.param('data').content,
        };
        let groupSubjects = JSON.parse(elem.content);
        for(let i = 0; i < groupSubjects.length; i++){
            for(let j = 0; j < groupSubjects[i].length; j++){
                if(groupSubjects[i][j]){
                    let user = await User.findOne({
                        name:groupSubjects[i][j].username.split(' ')[0],
                        surname:groupSubjects[i][j].username.split(' ')[1]
                    })*/
        let data = req.param('data');
        Subject.create({
            gNum:data.gNum,
            userId:data.userId,
            day:data.day,
            number:data.number,
        }).exec((err)=>{
            if(err) return res.sendStatus(500)
            return res.sendStatus(200)
        })/*
                }
            }
        }
        Education.update(Id.id,elem).exec(function(err){
            if(err) return res.sendStatus(500);
            return res.ok();
        });*/
    },
    //расписание определенной группы
    timetable:function(req, res){
        /*if(req.headers['user-agent'] === 'mobile-app'){
            return res.send(req);
        }
        Education
            .findOne({gNum:req.param('index')})
            .exec(function (err, data) {
                if (err) return res.send(500);
                if (!data) return res.send(204);
                return res.send(data.content);
            });*/
        Subject
            .find({gNum:req.param('index')})
            .exec((err, data)=>{
                if(err) return res.sendStatus(500)
                return res.send(data)
            })
    },
    //группы которым преподает данный препод
    teacherGroups:function(req, res){
        /*if(req.headers['user-agent'] === 'mobile-app'){
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
            });*/
        Subject.find({userId:req.param('id')}).exec((err, data)=>{
            if(err) return res.sendStatus(500)
            return res.send(data)
        })
      let _getUser = async () => {
        return await User.findOne({id: req.param('id')});
      }
    },
    index: function (req, res) {
        res.view();
    }

};

