const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page1',(req, res, next)=>{
        res.render('page1', {
            pageTitle: 'Page 1'
        })
    }
);

routes.post(
    '/page1', (req, res, next)=>{
        console.log('from Page 1: ' + req.body.message + " length: " + req.body.message.length);
        res.redirect('/page1');
    }
);

module.exports = routes;