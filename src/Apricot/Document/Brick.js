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

    // TODO: Zumenと共通化
    addBrick: function (bricks) {
        var self = this;

        for(var i = 0; i < bricks.length; i++) {
            self.bricks.push(bricks[i]);
        }
    },

    // レシピを初期化する
    initRecipe: require('./initRecipe')
};

module.exports = Brick;
