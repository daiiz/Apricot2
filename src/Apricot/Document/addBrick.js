'use strict';

var addBrick = function (bricks) {
    var self = this;

    for(var i = 0; i < bricks.length; i++) {
        var brick = bricks[i];
        if (self.name === 'Brick') {
            brick.parentBrick = self.id;
        }else if (self.name === 'Zumen') {
            brick.parentZumen = self.id;
        }
        self.bricks.push(brick);
    }
};

module.exports = addBrick;
