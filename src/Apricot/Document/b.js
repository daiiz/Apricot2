'use strict';

var b = function (idx) {
    var self = this;

    if (idx < self.bricks.length) {
        return self.bricks[idx];
    }
    return undefined;
};

module.exports = b;
