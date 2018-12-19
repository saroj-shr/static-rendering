const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page2',(req, res, next)=>{
        res.render('page2', {
            pageTitle: 'Page 2'
        })
    }
);

routes.post(
    '/page2', (req, res, next)=>{
        console.log('From Page 2: ' + req.body);
        res.redirect('/page2');
    }    
);

module.exports = routes;