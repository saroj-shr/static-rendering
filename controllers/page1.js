exports.getPage1 = (req, res, next)=>{
    res.render('page1',{
        pageTitle: 'Page 1'
    });
};

exports.postPage1 = (req, res, next)=>{    
    console.log('From page 1: ', req.body.message);
    console.log('Length:', req.body.message.length);
    res.redirect('/page1');
};