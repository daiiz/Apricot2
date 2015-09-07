'use strict';

var Zumen = function (option) {
    this.init(option || {});
};

Zumen.prototype = {
    init: function (option) {
        var self = this;
        self.uniqueId = 'z' + Math.floor(Math.random() * 1000000000);
        self.id = option.id || self.uniqueId;
        // 図面に含まれるモジュール
        self.modules = [];

        self.name = 'Zumen';
        self.addModule = self.addModule;
    },

    addModule: function (module) {
        var self = this;

        self.modules.push(module);
    }
};

module.exports = Zumen;
