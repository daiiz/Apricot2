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
    // モジュールを生成する
    Module: require('./Apricot/Document/Module'),
    // 図面を描画する
    Render: require('./Apricot/Document/Dom')
});

// Apricot.App.*
// 構築された Apricot UI を操作するためのAPIを展開する
window.Apricot.App = _.extend((window.Apricot.App || {}), {

});
