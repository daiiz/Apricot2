'use strict';

var assert = require('assert');
var Zumen = require('../../../src/Apricot/Document/Zumen');

describe('Apricot.Document.Zumen', function () {
    var zumen;

    before(function () {
        zumen = new Zumen();
    });

    it('Zumenを読み込むことができる', function () {
        assert.equal(zumen.name, 'Zumen');
    });

    it('modulesが初期化されている', function () {
        assert.equal(zumen.modules.length, 0);
    });
});
