'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

exports.authenticate = function (req, res) {
    if (req.body.userName == 'microservice' && req.body.password == 'microservice') {
        var token = jwt.sign(req.body.userName, 'microservice');

        // return the information including token as JSON
        res.json({
            statusCode: 200,
            message: 'Authenticated',
            data: {
                userName: req.body.userName,
                token: token
            }
        });
    }
    else
    {
        res.json({ success: false, message: 'Authentication failed.' });
    }
};