'use strict';

var assert = require('assert');
var $ = require('jquery');
var jsdom = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');
var View = require('../../../src/Apricot/Document/View');
var Zumen = require('../../../src/Apricot/Document/Zumen');

describe('Apricot.Document.View', function () {
    var zumen1;
    var view1;

    before(function () {
        zumen1 = new Zumen({id: 'zumen1'});
        view1  = new View({id: 'view1', document: testDocument});
    });

    describe('View', function () {
        it('Viewを読み込むことができる', function () {
            assert.equal(view1.name, 'View');
        });

        it('zumenを追加できる', function () {
            assert.equal(view1.zumens.length, 0);
            zumen1.addRecipe('design', {
                'FooBar': 'foobar'
            });
            view1.addZumen([zumen1]);
            assert.equal(view1.zumens.length, 1);
        });

        it('メソッドmakeDomが正常に動く', function () {
            view1.makeDom();
            assert.equal(view1.zumenDom.length, 1);
            assert.equal(view1.dom !== undefined, true);
        });

        it('zumenにidが割り当てられている', function () {
            var elem = view1.zumenDom[0];
            assert.equal(elem.id, 'zumen1');
        });

        it('zumenにclassが割り当てられている', function () {
            var elem = view1.zumenDom[0];
            assert.equal(elem.className, 'Zumen');
        });

        it('zumenのデフォルト位置は(0px, 0px)である', function () {
            var elem = view1.zumenDom[0];
            assert.equal(elem.style.top, '0px');
            assert.equal(elem.style.left, '0px');
        });

        it('メソッドcreateCSSによってCSSが生成されている', function () {
            var elem = view1.zumenDom[0];
            assert.equal(elem.style.FooBar, 'foobar');
        });
    });
});
