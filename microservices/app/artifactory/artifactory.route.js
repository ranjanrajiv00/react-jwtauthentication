'use strict';
var artifactoryController = require('./artifactory.controller');
var express = require('express');
var tokenInspector=require('./../../middleware/token.inspector');
var router = express.Router()

router.use(tokenInspector);

router.get('/', artifactoryController.get);

module.exports = router;