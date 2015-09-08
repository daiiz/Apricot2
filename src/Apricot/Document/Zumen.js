'use strict';

var Zumen = function (option) {
    // 独自のdocument空間が必要な場合の対応
    // shadowDOMやテスト対応
    if (option !== undefined && option.document) {
        this.document = option.document;
    }else {
        this.document = window.document;
    }
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
        self.initRecipe();

        // 図面のDOM
        self.dom;
        self.makeDom();

        self.name = 'Zumen';
        self.api = require('./Zumen.publicAPI');
        self.bindEvents();
    },

    addModule: function (modules) {
        var self = this;

        for(var i = 0; i < modules.length; i++) {
            self.modules.push(modules[i]);
        }
    },

    bindEvents: function () {
        var self = this;

        // 図面のレシピを監視する
        // 変更が生じたらDomも再構築する
        Object.observe(self.recipe, function (changes) {
            // この非同期コールバックが変更を収集
            changes.forEach(function (change) {
                console.info(change.type, change.name, change.oldValue);
            });
        });
    },

    // レシピを初期化する
    initRecipe: require('./initRecipe'),

    // レシピを基にDOMを構成する
    makeDom: require('./makeDom'),

    isVisible: require('./Zumen.isVisible'),
    css      : require('./css')
};

module.exports = Zumen;
