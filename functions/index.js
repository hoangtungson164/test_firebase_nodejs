const functions = require('firebase-functions');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var cors = require('cors')
var router = require('./router/router.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

exports.app = functions.https.onRequest(app);