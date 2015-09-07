'use strict';

var assert = require('assert');
var Base = require('../../src/Apricot/Base');

describe('Apricot.Base', function () {
    var base;

    before(function () {
        base = new Base({test: true});
    });

    it('Baseを読み込むことができる', function () {
        assert.equal(base.path, 'Apricot.Base');
    });

    it('UAはChromeAppである', function () {
        assert.equal(base.isCa, true);
    });

    it('UAはChromeBrowserでない', function () {
        assert.equal(base.isCb, false);
    });

    it('Apricotが有効なUAである', function () {
        assert.equal(base.okUA, true);
    });
});
