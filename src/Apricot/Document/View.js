'use strict';
var jsdom = require('jsdom');
var testDocument = jsdom.jsdom('<html><body></body></html>');
var window = window || undefined;

var View = function (option) {
    // 独自のdocument空間が必要な場合の対応
    // shadowDOMやテスト対応
    if (option !== undefined && option.document) {
        this.document = option.document;
    }else {
        if (window !== undefined) {
            this.document = window.document;
        }
        this.document = testDocument;
    }
    this.init(option || {});
};

View.prototype = {
    init: function (option) {
        var self = this;
        self.uniqueId = 'v' + Math.floor(Math.random() * 1000000000);
        self.id = option.id || self.uniqueId;

        self.name = 'View';
        // ビューに含まれる図面モデル
        self.zumens = [];
        self.zumenDom = [];
        // 追加されたユーザーJSのパス
        self.userScripts = [],
        // <head> 内に挿入される内容
        self.userHead = [
            '<meta charset="utf-8">',
            '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">',
            '<meta name="mobile-web-app-capable" content="yes">',
            '<meta name="apple-mobile-web-app-capable" content="yes">',
            '<!-- meta name="theme-color" content="#eee" id="headcolor" -->'
        ],

        self.bindEvents();
    },

    addZumen: function (zumens) {
        var self = this;

        for(var i = 0; i < zumens.length; i++) {
            self.zumens.push(zumens[i]);
        }
    },

    bindEvents: function () {
        var self = this;

        // 変更が生じたらDomも再構築する
        Object.observe(self.zumens, function (changes) {
            // この非同期コールバックが変更を収集
            changes.forEach(function (change) {
                // console.info(change.type, change.name, change.oldValue);
            });
        });
    },

    // ファイルに出力する関数
    fileWriter: require('./fileWriter'),

    // レシピを基にDOMを構成する
    makeDom: require('./View.makeDom'),

    // ユーザーJSを追加する
    addScript: require('./View.addScript'),

    // <head>内に要素を追加する
    addToHead: require('./View.addHead'),

    // HTMLを出力する
    generateHTML: require('./View.generateHTML'),

    // ChromeAppのマニフェストを出力する
    generateChromeAppManifest: require('./View.generateChromeAppManifest.js')
};

module.exports = View;
