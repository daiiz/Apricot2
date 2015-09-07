'use strict';

var assert = require('assert');
var Base = require('../../src/Apricot/Base');

describe('Apricot.Base', function () {
    var base;

    before(function () {
        base = new Base();
    });

    it('Baseを読み込むことができる', function () {
        assert.equal(base.path, 'Apricot.Base');
    });
});
