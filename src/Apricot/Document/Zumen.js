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

        // 図面のレシピ
        // 描画に必要な情報はすべてここに含める
        self.recipe = {
            'role': 'div',
            'design': {},
            'prop': {},
            'data': {}
        };

        self.name = 'Zumen';
        self.initRecipe();
        self.api = require('./Zumen.publicAPI');
    },

    addModule: function (modules) {
        var self = this;

        for(var i = 0; i < modules.length; i++) {
            self.modules.push(modules[i]);
        }
    },

    // レシピを初期化する
    initRecipe: require('./initRecipe'),

    isVisible: require('./Zumen.isVisible'),
    css      : require('./css')
};

module.exports = Zumen;
