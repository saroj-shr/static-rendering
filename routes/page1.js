const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page1',(req, res, next)=>{
        res.sendFile(path.join(__dirname, '..', 'views', 'page1.html'))
    }
);

routes.post(
    '/page1', (req, res, next)=>{
        console.log('from Page 1: ' + req.body.message + " length: " + req.body.message.length);
        res.redirect('/page1');
    }
);

module.exports = routes;