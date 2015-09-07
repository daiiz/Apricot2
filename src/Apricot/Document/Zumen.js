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
        self = self;
    },

    addModule: function (modules) {
        var self = this;

        for(var i = 0; i < modules.length; i++) {
            self.modules.push(modules[i]);
        }
    },

    // 表示されているかどうか
    isVisible: require('./Zumen.isVisible')
};

module.exports = Zumen;
