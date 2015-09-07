'use strict';

var assert = require('assert');
var Zumen = require('../../../src/Apricot/Document/Zumen');

describe('Apricot.Document.Zumen', function () {
    var zumen1, zumen2;

    before(function () {
        zumen1 = new Zumen({id: 'zumen1'});
        zumen2 = new Zumen({id: 'zumen2'});
    });

    it('Zumenを読み込むことができる', function () {
        assert.equal(zumen1.name, 'Zumen');
    });

    it('Zumenが独立している', function () {
        assert.equal(zumen1.id !== zumen2.id, true);
    });

    it('modulesが初期化されている', function () {
        assert.equal(zumen1.modules.length, 0);
    });
});
