exports.getIndexPage = (req, res, next) =>{
    res.render('index', {
        pageTitle: 'Landing Page'
    });
};