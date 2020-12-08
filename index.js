'use strict';

require('dotenv').config();

// to grab modules exported from server.js
const server = require('./server.js');

server.start(3000);