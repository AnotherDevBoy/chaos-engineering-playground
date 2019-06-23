'use strict';

const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'api' });

module.exports = logger;
