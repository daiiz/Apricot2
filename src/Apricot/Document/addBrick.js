'use strict';

var addBrick = function (bricks) {
    var self = this;

    for(var i = 0; i < bricks.length; i++) {
        self.bricks.push(bricks[i]);
    }
};

module.exports = addBrick;
