'use strict';

var assert = require('assert');
var $ = require('jquery');
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

    it('ZumenのAPIを呼ぶことができる', function () {
        assert.equal(zumen1.api().version, 0);
    });

    it('Zumenのデフォルトroleはdivである', function () {
        assert.equal(zumen1.recipe.role, 'div');
    });

    it('Zumenのデフォルト位置は(0, 0)である', function () {
        assert.equal(zumen1.recipe.design.top, 0);
        assert.equal(zumen1.recipe.design.left, 0);
    })

    it('modulesが初期化されている', function () {
        assert.equal(zumen1.modules.length, 0);
    });

    it('modulesを追加できる', function () {
        zumen1.addModule([{}]);
        assert.equal(zumen1.modules.length, 1);
        assert.equal(zumen2.modules.length, 0);
    });
});
