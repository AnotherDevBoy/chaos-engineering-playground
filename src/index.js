'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler')

const app = express();

app.get('/', asyncHandler(async (req, res, _) => {
  res.send('Hello World');
}));

app.listen(3000);
