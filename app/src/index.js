'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const config = require('./config');
const MySQLRepository = require('./repository/mysql-repository');
const metrics = require('./metrics');
const logger = require('./logger');

const repository = new MySQLRepository(config.sqlHost, config.sqlPort, config.maxConnections);

const app = express();

app.get('/', asyncHandler(async (req, res, _) => {
  const start = new Date()
  await repository.ping();

  res.send('Hello World');

  const latency = new Date() - start;
  metrics.logLatency(latency);
}));

app.listen(3000);
