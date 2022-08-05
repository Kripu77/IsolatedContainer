const express = require('express');
const { home } = require('../handlers/controllers');
const homeRouter = express.Router();


homeRouter.get("", home);

module.exports ={homeRouter}