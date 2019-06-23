'use strict';

const process = require('process');

const config = {
  sqlHost: process.env.DB_HOST,
  sqlPort: process.env.DB_PORT,
  maxConnections: process.env.DB_MAX_CONNECTIONS,
  influxHost: process.env.INFLUX_HOST
};

module.exports = config;
