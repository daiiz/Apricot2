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
        if (zumenFile !== undefined) {
            self.zumenFileName = zumenFile;
        }

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
            // 図面スキャンを実行する
            self.scanZumen(self.zumenFileName);
            // self.zumenParts, self.zumenColors を完成させる
            self.loadZumenFile(self.zumenFileName);
            // self.bricks を完成させる
            self.bricks = self.buildBricks(self.zumenFileName);
        }

        self.api = require('./Zumen.publicAPI');
    },

    // 図面スキャナー
    scanZumen: require('./Zumen.scanZumen'),
    // 図面ファイルを読み込み、zumenParts, zumenColors を完成させる
    loadZumenFile: require('./Zumen.loadZumenFile'),
    // 図面ファイルから読み取った情報を基に、bricks を完成させる
    buildBricks: require('./Zumen.buildBricks'),

    // 図面のroleのセッター
    is: require('./is'),
    // 図面にブリックを追加する
    addBrick: require('./addBrick'),
    // 図面のレシピに情報を追加する
    addRecipe: require('./addRecipe'),
    // 図面のレシピを上書きする
    setRecipe: require('./setRecipe'),

    // bricksからブリックを得るための略記法
    b    : require('./b'),
    brick: require('./b'),

    // レシピを初期化する
    initRecipe: require('./Zumen.initRecipe'),

    isVisible: require('./Zumen.isVisible'),
    css      : require('./css')
};

module.exports = Zumen;
