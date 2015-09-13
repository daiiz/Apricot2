'use strict';

var assert = require('assert');
var $ = require('jquery');
var jsdom = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');
var View = require('../../../src/Apricot/Document/Brick');
var Zumen = require('../../../src/Apricot/Document/Zumen');

describe('Apricot.Document.View', function () {
    var zumen1;
    var brick1, brick2;

    before(function () {
        zumen1 = new Zumen({id: 'zumen1'});
        brick1 = new View({id: 'brick1', document: testDocument});
        brick2 = new View({id: 'brick2', document: testDocument});
    });

    describe('Brick', function () {
        it('Brickを読み込むことができる', function () {
            assert.equal(brick1.name, 'Brick');
            assert.equal(brick2.name, 'Brick');
        });

        it('Brickのデフォルト位置は(0, 0)である', function () {
            assert.equal(brick1.recipe.design.Top, 0);
            assert.equal(brick1.recipe.design.Left, 0);
        });

        it('brick2を、brick1内に追加できる', function () {
            assert.equal(brick2.parentBrick, undefined);
            brick1.addBrick([brick2]);
            assert.equal(brick1.bricks.length, 1);
        });

        it('brick2の親はbrick1である', function () {
            assert.equal(brick2.parentBrick, 'brick1');
        });

        it('brick1をzumen1に追加できる', function () {
            assert.equal(zumen1.bricks.length, 0);
            zumen1.addBrick([brick1]);
            assert.equal(zumen1.bricks.length, 1);
        });
        /*
        it('brick1とbrick2は、zumen1に属している', function () {
            assert.equal(brick1.getParentZumen(), 'zumen1');
            assert.equal(brick2.getParentZumen(), 'zumen1');
        });
        */
    });
});
