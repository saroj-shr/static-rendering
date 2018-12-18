const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page2',(req, res, next)=>{
        res.sendFile(path.join(__dirname, '..', 'views', 'page2.html'))
    }
);

routes.post(
    '/page2', (req, res, next)=>{
        console.log('From Page 2: ' + req.body);
        res.redirect('/page2');
    }    
);

module.exports = routes;