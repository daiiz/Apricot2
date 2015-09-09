'use strict';

var Brick = function (option) {
    this.init(option || {});
};

Brick.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'Brick';
    }
};

module.exports = Brick;
