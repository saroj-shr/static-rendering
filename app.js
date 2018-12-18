const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();//using express
app.use(bodyParser.urlencoded());//using body parser

//static contant
app.use(express.static(path.join(__dirname, 'public')));

//importing routes
const indexRoute = require('./routes/index');

//using routes
app.use(indexRoute);

app.listen(2000);