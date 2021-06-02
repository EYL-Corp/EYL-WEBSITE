const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const index = require('./routes/index');
const mail = require('./routes/mail');
const fs = require('fs');
const port = 3000 || process.env.PORT ;

require("dotenv").config();

app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use(index);
app.use(mail);
module.exports = app;
app.listen(port)