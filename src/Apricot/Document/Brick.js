'use strict';

var Brick = function (option) {
    this.init(option || {});
};

Brick.prototype = {
    init: function (option) {
        var self = this;

        self.uniqueId = 'b' + Math.floor(Math.random() * 1000000000);
        self.id = option.id || self.uniqueId;
        self.name = 'Brick';

        // ブリックに含まれるブリック
        self.bricks = [];

        // ブリックのレシピ
        // 描画に必要な情報はすべてここに含める
        self.recipe = {
            'role': 'div',
            'design': {},
            'prop': {},
            'data': {}
        };
        self.initRecipe();
    },

    // レシピを初期化する
    initRecipe: require('./initRecipe')
};

module.exports = Brick;
