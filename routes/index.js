const express = require('express');
const routes = express.Router();

//imported controllers
const indexController = require('../controllers/index');
const page1Controller = require('../controllers/page1');
const page2Controller = require('../controllers/page2');
const page3Controller = require('../controllers/page3');

routes.get('/page1', page1Controller.getPage1);
routes.post('/page1', page1Controller.postPage1);

routes.get('/page2', page2Controller.getPage2);

routes.get('/page3', page3Controller.getPage3);

routes.get('/', indexController.getIndexPage);

module.exports = routes;