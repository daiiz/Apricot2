'use strict';

var View = function (option) {
    // 独自のdocument空間が必要な場合の対応
    // shadowDOMやテスト対応
    if (option !== undefined && option.document) {
        this.document = option.document;
    }else {
        this.document = window.document;
    }
    this.init(option || {});
};

View.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'View';
        // ビューに含まれる図面モデル
        self.zumens = [];
    },


    bindEvents: function () {
        var self = this;

        // 変更が生じたらDomも再構築する
        Object.observe(self.zumens, function (changes) {
            // この非同期コールバックが変更を収集
            changes.forEach(function (change) {
                console.info(change.type, change.name, change.oldValue);
            });
        });
    },

    // レシピを基にDOMを構成する
    makeDom: require('./makeDom')
};

module.exports = View;
