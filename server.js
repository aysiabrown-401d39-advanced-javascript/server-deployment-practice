'use strict';

// dependencies 
const express = require('express');
const app = express();
require('dotenv').config();

// port 
// const PORT = process.env.PORT || 3000;

// using modular local files
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

// endpoints
app.get('/', home);
app.get('/data', data);
app.get('/bad', (req,res,next) => {
    next('Something went wrong.');
})
app.use('*', notFoundHandler);

app.use(errorHandler);

// callback functions for endpoints
function home(req, res) {
    res.status(200).send('Hello World');
}

function data(req, res, next) {
    const outputObject = {
        10: 'even',
        3: 'odd',
        "time": new Date()
    }
    res.status(200).json(outputObject);
}

// testing purposes 
// app.listen(PORT, () => console.log('listening at: ', PORT));

// server is listening
function start(port) {
    app.listen(port, () => console.log('server is lsitening on: ', port));
}

// export for use in other files 
module.exports = {
    app: app,
    start: start
}