module.exports = async function (req, res, ok) {
    console.log('lolloooool');
    console.log(req.session.auth);
    console.log(req.session.User);
    if (req.session.auth && req.session.User[0].admin) {
        return ok();
    } else {
        return res.redirect('/login');
    };
}