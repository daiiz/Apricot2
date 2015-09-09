'use strict';

var assert = require('assert');
var $ = require('jquery');
var jsdom = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');
var View = require('../../../src/Apricot/Document/Brick');
var Zumen = require('../../../src/Apricot/Document/Zumen');

describe('Apricot.Document.View', function () {
    var zumen1;
    var brick1;

    before(function () {
        zumen1 = new Zumen({id: 'zumen1'});
        brick1  = new View({id: 'brick1', document: testDocument});
    });

    describe('Brick', function () {
        it('Brickを読み込むことができる', function () {
            assert.equal(brick1.name, 'Brick');
        });
    });
});
