'use strict';

exports.get = function (req, res) {
    var data=[{
        name:'product1',
        price:100,
        description:'prosuct1-desc'
    },{
        name:'product2',
        price:200,
        description:'prosuct2-desc'
    }]
    res.json(data);
};