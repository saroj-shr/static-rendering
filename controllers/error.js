exports.get404Page = (req, res, next)=>{
    res.render('404',{
        titlePage: '404 Page not found!'
    });
};