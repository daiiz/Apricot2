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

    // ブリックにブリックを追加する
    addBrick: require('./addBrick'),
    // 図面のレシピに情報を追加する
    addRecipe: require('./addRecipe'),
    // ブリックのレシピを上書きする
    setRecipe: require('./setRecipe'),

    // レシピを初期化する
    initRecipe: require('./Brick.initRecipe')
};

module.exports = Brick;
