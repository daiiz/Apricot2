'use strict';

var Base = function () {
    this.init();
};

Base.prototype = {
    init: function () {
        var self = this;

        self.path = 'Apricot.Base';
    }
};

module.exports = Base;
