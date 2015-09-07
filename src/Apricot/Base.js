'use strict';

// Chrome App であることをシミュレートするときに使う
var testChrome = {
    app: {
        window: {}
    }
};

var Base = function (option) {
    // テスト実行時の設定
    if (option !== undefined && option.test) {
        this.chrome = testChrome;
    }else {
        this.chrome = window.chrome;
    }
    this.init();
};

Base.prototype = {
    init: function () {
        var self = this;

        self.path = 'Apricot.Base';
        self.isCa = self.isChromeApp();
        self.isCb = self.isChrome();
        self.okUA = self.okUserAgent();
        self.bindEvents();
    },

    // 実行環境がChromeアプリであるかを判定する
    isChromeApp: function () {
        var self = this;
        var chrome = self.chrome;

        if (chrome !== undefined && chrome.app.window !== undefined) {
            // 「chrome アプリ」である
            return true;
        }
        return false;
    },

    // 実行環境がChromeブラウザであるかを判定する
    isChrome: function () {
        var self = this;
        var chrome = self.chrome;

        if (chrome !== undefined && chrome.app.window === undefined) {
            // 「chrome ブラウザ」である
            return true;
        }
        return false;
    },

    // Chromeアプリ または Chromeブラウザ であればtrueを返す
    okUserAgent: function () {
        var self = this;

        if (self.isCa || self.isCb) {
            return true;
        }
        return false;
    },

    bindEvents: function () {
    },
};

module.exports = Base;
