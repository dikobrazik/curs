/**
 * EducationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    update: async function (req, res) {
        let data = req.param('data');
        let subj = await Subject.find({
            userId:data.userId,
            day:data.day,
            number:data.number,
        });
        console.log(subj)
        if(!subj){
            Subject.create({
                gNum:data.gNum,
                userId:data.userId,
                day:data.day,
                number:data.number,
            }).exec((err)=>{
                if(err) return res.sendStatus(500)
                return res.sendStatus(200)
            })
        }else{
            return res.sendStatus(208)
        }
    },
    //расписание определенной группы
    timetable:function(req, res){
        Subject
            .find({gNum:req.param('index')})
            .exec((err, data)=>{
                console.log('data')
                if(err) return res.sendStatus(500)
                return res.send(data)
            })
    },
    //группы которым преподает данный препод
    teacherGroups:function(req, res){
        Subject.find({userId:req.param('id')}).exec((err, data)=>{
            if(err) return res.sendStatus(500)
            if(req.param('day')){
                let newData = data.filter(v=>Number(v.day)===Number(req.param('day')))
                return res.send(newData)
            }else 
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

