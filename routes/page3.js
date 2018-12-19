const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page3',(req, res, next)=>{
        res.render('page3',{
            pageTitle: 'Page 3'
        })
    }
);

routes.post(
    '/page3', (req, res, next)=>{
        console.log('from page 3: ' + req.body);
    }
);

module.exports = routes;