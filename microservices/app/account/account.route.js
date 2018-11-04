'use strict';
var accountController = require('./account.controller');
var express = require('express');
var router = express.Router()

router.post('/authenticate', accountController.authenticate);

module.exports = router;