/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        var params = {
            description : req.param('description'),
            content     : req.param('content'),
            title       : req.param('title'),
        }

        Post.create(params).exec(function (err, post) {
            return res.redirect('/post');
            if (err) return res.send(500);
        });

    },
    update: function (req, res) {
        var Id = req.param('id');
        var elem = {
            description : req.param('description'),
            content     : req.param('content'),
            title       : req.param('title')
        };
        Post.update(Id, elem).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/admin');
        });
            
    },
    delete: function (req, res) {
        var Id = req.param('id');
        Post.destroy(Id).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/post');
        });
    },

    clear: function (req, res) {
        Post.destroy({}).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/post');
        });
    },

    index: function (req, res) {
        // Поиск в модели Post
        Post.find()
            .exec(function (err, posts) {
                if (err) return res.send(500);
                return res.view('/post',{
                    posts: posts
                });

            });
    },

    watch: function (req, res) {
        var Id = req.param('id');
        Post.findOne(Id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err)   return res.send(500);
            return res.view({
                post: post
            });

        });
    },
    page: function (req, res) {
        var page = req.param('page');
        Post.find()
            .sort('id DESC')
            .paginate({
                pageNum : page,
                pageSize: 5
            })
            .exec(function (err, posts) {
                if (err) return res.send(500);
                res.view({
                    posts: posts
                });

            });
    }
};

