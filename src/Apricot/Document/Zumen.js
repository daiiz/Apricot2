'use strict';

var Zumen = function () {
    this.init();
};

Zumen.prototype = {
    init: function () {
        var self = this;
        // 図面に含まれるモジュール
        self.modules = [];

        self.name = 'Zumen';
    }
};

module.exports = Zumen;
