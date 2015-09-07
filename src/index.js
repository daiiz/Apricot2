'use strict';

var _ = require('underscore');

// Apricot.*
window.Apricot = _.extend((window.Apricot || {}), {
    Base : require('./Apricot/Base')
});

// Apricot.Document.*
// Apricot UI を構築するためのAPIを展開する
window.Apricot.Document = _.extend((window.Apricot.Document || {}), {

});

// Apricot.App.*
// 構築された Apricot UI を操作するためのAPIを展開する
window.Apricot.App = _.extend((window.Apricot.App || {}), {
    
});
