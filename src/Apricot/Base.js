'use strict';

var Base = function () {
    this.init();
};

Base.prototype = {
    init: function () {
        var self = this;

        console.info('base');
    }
};

module.exports = Base;
