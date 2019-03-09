/**
 * LessonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    update: async function(req, res){
        let data = req.param('data')
        Lesson.findOrCreate({
            subjId:data.subjId,
            date:data.date,
        }, {
            subjId:data.subjId,
            date:data.date,
            content:data.content,
        }).exec(function(err, record, wasCreated){
            if(err) return res.sendStatus(500)
            if(wasCreated) return res.sendStatus(200)
        })
        let upd = await Lesson.update({
            subjId:data.subjId, 
            date:data.date
        }).set({
            content:data.content,
        })
        if(upd) return res.sendStatus(200)
        return res.ok()
    }, 
    list: async function(req,res){
        console.log(req.allParams())
        if(req.param('userId')){
            let subjects = await Subject.find({userId:req.param('userId')})
            let lessons = await Promise.all(
                subjects.map(async(value) => {
                    let cri = {subjId:value.id}
                    if(req.param('date')) cri.date = req.param('date')
                    let les = await Lesson.find(cri)
                    return les
                })
            )
            return res.send(flatten(lessons))
        }else{
            let lessons = await Lesson.find()
            return res.send(lessons)
        }
        function flatten(arr) {
            return arr.reduce(function (flat, toFlatten) {
              return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
            }, []);
        }
    },
};

