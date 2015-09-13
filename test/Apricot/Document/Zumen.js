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

    describe('Zumen', function () {
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
        });

        it('bricksが初期化されている', function () {
            assert.equal(zumen1.bricks.length, 0);
        });

        it('brickを追加できる', function () {
            zumen1.addBrick([{}]);
            assert.equal(zumen1.bricks.length, 1);
            assert.equal(zumen2.bricks.length, 0);
        });
    });

    describe('Zumen API', function () {
        it('デフォルトで図面は非表示である', function () {
            assert.equal(zumen1.api(1).isVisible(), false);
        });
    });

    describe('Zumen Loader', function () {
        var zumen3;

        before(function () {
            zumen3 = new Zumen({id: 'zumen3'}, 'simple');
        });

        it('図面ファイル名を保持できる', function () {
            assert.equal(zumen3.zumenFileName, 'simple');
        });

        // ブリックになる前の、生の状態をパーツとよぶ
        it('図面に含まれるパーツ数は6である', function () {
            assert.equal(zumen3.zumenParts.length, 8);
        });

        it('すべてのパーツの左上頂点座標を正しく取得できる' ,function () {
            assert.deepEqual(zumen3.zumenParts[0].lt, [0, 0]);
            assert.deepEqual(zumen3.zumenParts[1].lt, [10, 9]);
            assert.deepEqual(zumen3.zumenParts[2].lt, [383, 19]);
            assert.deepEqual(zumen3.zumenParts[3].lt, [429, 19]);
            assert.deepEqual(zumen3.zumenParts[4].lt, [0, 68]);
            assert.deepEqual(zumen3.zumenParts[5].lt, [0, 283]);
        });

        it('すべてのパーツの右下頂点座標を正しく取得できる' ,function () {
            assert.deepEqual(zumen3.zumenParts[0].rb, [0+478, 0+68]);
            assert.deepEqual(zumen3.zumenParts[1].rb, [10+48, 9+48]);
            assert.deepEqual(zumen3.zumenParts[2].rb, [383+36, 19+36]);
            assert.deepEqual(zumen3.zumenParts[3].rb, [429+36, 19+36]);
            assert.deepEqual(zumen3.zumenParts[4].rb, [0+478, 68+215]);
            assert.deepEqual(zumen3.zumenParts[5].rb, [0+478, 283+56]);
        });

        it('パーツの包含関係を決定できる', function () {
            assert.equal(zumen3.zumenParts[0].parentPartIdx, undefined);
            assert.equal(zumen3.zumenParts[1].parentPartIdx, 0);
            assert.equal(zumen3.zumenParts[2].parentPartIdx, 0);
            assert.equal(zumen3.zumenParts[3].parentPartIdx, 0);
            assert.equal(zumen3.zumenParts[4].parentPartIdx, undefined);
            assert.equal(zumen3.zumenParts[5].parentPartIdx, undefined);
            assert.equal(zumen3.zumenParts[6].parentPartIdx, 5);
            assert.equal(zumen3.zumenParts[7].parentPartIdx, 6);
        });

        it('関数buildBricksが正しいブリック数を返す', function () {
            assert.equal(zumen3.buildBricks().length, 3);
        });

        it('関数buildBricksが正しくブリックツリーを生成している', function () {
            assert.equal(zumen3.bricks.length, 3);
            assert.equal(zumen3.bricks[0].id, 'simple-0');
            assert.equal(zumen3.bricks[0].bricks[0].id, 'simple-1');
            assert.equal(zumen3.bricks[0].bricks[1].id, 'simple-2');
            assert.equal(zumen3.bricks[0].bricks[2].id, 'simple-3');
            assert.equal(zumen3.bricks[1].id, 'simple-4');
            assert.equal(zumen3.bricks[1].bricks.length, 0);
            assert.equal(zumen3.bricks[2].id, 'simple-5');
            assert.equal(zumen3.bricks[2].bricks[0].id, 'simple-6');
            assert.equal(zumen3.bricks[2].bricks[0].bricks[0].id, 'simple-7');
        });


    });
});
