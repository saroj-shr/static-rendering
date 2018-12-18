const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/page3',(req, res, next)=>{
        res.sendFile(path.join(__dirname, '..', 'views', 'page3.html'))
    }
);

routes.post(
    '/page3', (req, res, next)=>{
        console.log('from page 3: ' + req.body);
    }
);

module.exports = routes;