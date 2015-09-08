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
            view1.addZumen([zumen1]);
            assert.equal(view1.zumens.length, 1);
        });
    });
});
