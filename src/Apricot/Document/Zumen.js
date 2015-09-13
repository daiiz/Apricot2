'use strict';

var Zumen = function (option, zumenFile) {
    this.init(option || {}, zumenFile);
};

Zumen.prototype = {
    init: function (option, zumenFile) {
        var self = this;

        self.name = 'Zumen';
        self.uniqueId = 'z' + Math.floor(Math.random() * 1000000000);
        self.id = option.id || self.uniqueId;
        // 図面に含まれるモジュール
        self.bricks = [];
        // 図面ファイルの名前
        self.zumenFileName = zumenFile;

        // 図面のレシピ
        // 描画に必要な情報はすべてここに含める
        self.recipe = {
            'role': 'div',
            'design': {},
            'prop': {},
            'data': {}
        };
        self.initRecipe();

        if (zumenFile !== undefined) {
            // self.zumenParts, self.zumenColors を完成させる
            self.loadZumenFile(zumenFile);
        }

        self.api = require('./Zumen.publicAPI');
    },

    // 図面ファイルを読み込み、bricksを完成させる
    loadZumenFile: require('./Zumen.loadZumenFile'),

    // 図面にブリックを追加する
    addBrick: require('./addBrick'),
    // 図面のレシピに情報を追加する
    addRecipe: require('./addRecipe'),
    // 図面のレシピを上書きする
    setRecipe: require('./setRecipe'),

    // レシピを初期化する
    initRecipe: require('./Zumen.initRecipe'),

    isVisible: require('./Zumen.isVisible'),
    css      : require('./css')
};

module.exports = Zumen;
