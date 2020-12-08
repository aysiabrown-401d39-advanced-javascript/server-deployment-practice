'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// to grab modules exported from server.js
const server = require('./server.js');

server.start(PORT);