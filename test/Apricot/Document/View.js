'use strict';

var assert = require('assert');
var jsdom = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');
var View = require('../../../src/Apricot/Document/View');
var Zumen = require('../../../src/Apricot/Document/Zumen');
var Brick = require('../../../src/Apricot/Document/Brick');

describe('Apricot.Document.View', function () {
    var zumen1;
    var brick0, brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12;
    var view1;

    before(function () {
        zumen1 = new Zumen({id: 'zumen1'});
        // ブリック
        brick0  = new Brick({id: 'brick0'});
        brick1  = new Brick({id: 'brick1'});
        brick2  = new Brick({id: 'brick2'});
        brick3  = new Brick({id: 'brick3'});
        brick4  = new Brick({id: 'brick4'});
        brick5  = new Brick({id: 'brick5'});
        brick6  = new Brick({id: 'brick6'});
        brick7  = new Brick({id: 'brick7'});
        brick8  = new Brick({id: 'brick8'});
        brick9  = new Brick({id: 'brick9'});
        brick10 = new Brick({id: 'brick10'});
        brick11 = new Brick({id: 'brick11'});
        brick12 = new Brick({id: 'brick12'});
        // ビュー
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

        it('zumenにbrickを追加できる', function () {
            // ブリックの木構造を作る
            // 2段目
            brick4.addBrick([brick10, brick11]);
            brick9.addBrick([brick12]);
            // 1段目
            brick1.addBrick([brick4, brick5, brick6]);
            brick2.addBrick([brick7, brick8]);
            brick3.addBrick([brick9]);
            // 根
            brick0.addBrick([brick1, brick2, brick3]);

            // ブリック木を図面に追加
            zumen1.addBrick([brick0]);

            assert.equal(zumen1.bricks.length, 1);
            assert.equal(brick1.bricks.length, 3);
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

        it('ブリック木を正しくトレースできている', function () {
            assert.equal(brick0.traceBricksId.length, 13);
            assert.equal(brick0.traceBricksId.toString(), 'brick0,brick1,brick2,brick3,brick4,brick5,brick6,brick10,brick11,brick7,brick8,brick9,brick12');
        });

        it('brickDomが正しく生成されている', function () {
            assert.equal(brick0.bricks.length, 3);                      // brick-1, 2, 3
            assert.equal(brick0.bricks[0].bricks.length, 3);            // brick-4, 5, 6
            assert.equal(brick0.bricks[0].bricks[0].bricks.length, 2);  // brick-10, 11
            assert.equal(brick0.bricks[1].bricks.length, 2);            // brick-7, 8
            assert.equal(brick0.bricks[1].bricks[0].bricks.length, 0);
            assert.equal(brick0.bricks[2].bricks.length, 1);            // brick-9
            assert.equal(brick0.bricks[2].bricks[0].bricks.length, 1);  // brick-12

            assert.equal(view1.zumenDom.length, 1);
            assert.equal(view1.zumenDom.length === view1.zumens.length, true);
            assert.equal(view1.zumenDom[0].id === view1.zumens[0].id, true);
        });

        it('ユーザーJSを追加できる', function () {
            assert.equal(view1.addScript(), 0);
            assert.equal(view1.addScript(['user.js']), 1);
        });

        it('generateHTMLを呼び出すことができる', function () {
            assert.equal(view1.generateHTML('test.html'), 'test.html');
        });

        it('ViewでfileWriterを呼び出し、正しい場所にファイルを出力できる', function () {
            assert.equal(view1.fileWriter(), '/Users/daiki/GitHubRepos/Apricot2/apricot.fileWriter.txt');
            assert.equal(view1.fileWriter('', 'test',   'fo'), '/Users/daiki/GitHubRepos/Apricot2/test/apricot.fileWriter.txt');
            assert.equal(view1.fileWriter('', '/test',  'foo'), '/Users/daiki/GitHubRepos/Apricot2/test/apricot.fileWriter.txt');
            assert.equal(view1.fileWriter('', 'test/',  'fooo'), '/Users/daiki/GitHubRepos/Apricot2/test/apricot.fileWriter.txt');
            assert.equal(view1.fileWriter('', '/test/', 'foooo'), '/Users/daiki/GitHubRepos/Apricot2/test/apricot.fileWriter.txt');
        });
    });
});
