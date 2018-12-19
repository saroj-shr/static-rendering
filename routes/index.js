const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/',(req, res, next)=>{
        res.render('index', {
            pageTitle: 'Landing Page'
        })
    }
);

module.exports = routes;