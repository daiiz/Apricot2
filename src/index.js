'use strict';

var _ = require('underscore');

// Apricot.*
window.Apricot = _.extend((window.Apricot || {}), {
    Base : require('./Apricot/Base')
});

// Apricot.Document.*
// Apricot UI を構築するためのAPIを展開する
window.Apricot.Document = _.extend((window.Apricot.Document || {}), {
    // 図面を読み込む、または、生成する
    Zumen: require('./Apricot/Document/Zumen'),
    // ブリックを生成する
    Brick: require('./Apricot/Document/Brick'),
    // 図面を表示して管理する
    View : require('./Apricot/Document/View')
});

// Apricot.App.*
// Apricot UI を Apricot JavaScript APIで操作する
// ここに展開されるAPIでは、Apricot UIを新規に作成することはできない（DOMは可能）
window.Apricot.App = _.extend((window.Apricot.App || {}), {
    // ビューをインポートする
    importView: require('./Apricot/App/importView')
});
