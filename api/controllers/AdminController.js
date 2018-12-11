/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    index: function (req, res) {
        Post.find()
            .sort('id DESC')
            .exec(function (err, posts) {
                if (err) return res.send(500);
                return res.view({
                    posts: posts
                });
            });
    },

    edit: function (req, res) {
        var Id = req.param('id');

        Post.findOne(Id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err) return res.send(500);
            return res.view({
                post: post
            });
        });
    }
};

