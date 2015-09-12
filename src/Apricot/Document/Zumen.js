'use strict';

var Zumen = function (option) {
    this.init(option || {});
};

Zumen.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'Zumen';
        self.uniqueId = 'z' + Math.floor(Math.random() * 1000000000);
        self.id = option.id || self.uniqueId;
        // 図面に含まれるモジュール
        self.bricks = [];

        // 図面のレシピ
        // 描画に必要な情報はすべてここに含める
        self.recipe = {
            'role': 'div',
            'design': {},
            'prop': {},
            'data': {}
        };
        self.initRecipe();

        self.api = require('./Zumen.publicAPI');
    },

    addBrick: function (bricks) {
        var self = this;

        for(var i = 0; i < bricks.length; i++) {
            self.bricks.push(bricks[i]);
        }
    },

    addRecipe: function (recipeKey, newRecipe) {
        var self = this;

        var attrs = Object.keys(newRecipe);
        var recipe = self.recipe[recipeKey];
        attrs.forEach(function (attr) {
            recipe[attr] = newRecipe[attr];
        });
        return true;
    },

    setRecipe: function (recipeKey, newRecipe) {
        var self = this;

        if (recipeKey !== undefined) {
            var recipe = self.recipe[recipeKey];
            recipe = newRecipe;
            return true;
        }
        return false;
    },

    // レシピを初期化する
    initRecipe: require('./Zumen.initRecipe'),

    isVisible: require('./Zumen.isVisible'),
    css      : require('./css')
};

module.exports = Zumen;
