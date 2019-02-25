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
            content:JSON.stringify(data.content),
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
        let lessons = await Lesson.find()
        return res.send(lessons)
    },
};

