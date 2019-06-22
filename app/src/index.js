'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const MySQLRepository = require('./repository/mysql-repository');

const repository = new MySQLRepository();

const app = express();

app.get('/', asyncHandler(async (req, res, _) => {
  await repository.ping();
  res.send('Hello World');
}));

app.listen(3000);
