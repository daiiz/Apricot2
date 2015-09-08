'use strict';

var assert = require('assert');
var $ = require('jquery');
var jsdom = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');
var View = require('../../../src/Apricot/Document/View');

describe('Apricot.Document.View', function () {
    var view1;

    before(function () {
        view1 = new View({id: 'view1', document: testDocument});
    });

    describe('View', function () {
        it('Viewを読み込むことができる', function () {
            assert.equal(view1.name, 'View');
        });
    });
});
