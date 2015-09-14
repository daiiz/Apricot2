'use strict';

// 図面パーツ情報から、Zumenに追加するBricksを返す
var buildBricks = function () {
    var self = this;
    var Brick = require('./Brick');
    var zumenFile = self.zumenFileName;

    var parts  = self.zumenParts;
    var colors = self.zumenColors;

    // まずは、全パーツをbrickにする
    var bricks = [];
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var brickId = zumenFile + '-' + i;
        var brick = new Brick({id: brickId});
        // 設定事項
        brick.addRecipe('design', {
            Top       : +part.top,
            Left      : +part.left,
            Width     : +part.width,
            Height    : +part.height,
            BrickColor: colors['v' + i],
            position  : 'absolute'
        });
        brick.addRecipe('data', {
            zumenFileName: zumenFile
        });
        // brickと親brickのidxを併せて保持する
        bricks.push([brick, part.parentPartIdx]);
    }

    // brickの親子関係を構築する
    for (var i = 0; i < bricks.length; i++) {
        brick = bricks[i][0];    // 着目するパーツ
        var brickId = brick.id;

        bricks.forEach(function (insertBrick) {
            var willInsertBrick = insertBrick[0];   // これから親の下に追加しようとしているブリック
            var insertBrickParentId = insertBrick[1];
            if (insertBrickParentId !== undefined) {
                insertBrickParentId = zumenFile + '-' + insertBrick[1];
            }
            // id と parentPartIdx が一致したら挿入すべき
            if (insertBrickParentId !== undefined && brickId === insertBrickParentId) {
                brick.addBrick([willInsertBrick]);
            }
        });
    }

    // 図面直下に入るブリックを決定する
    var rootBricks = [];
    bricks.forEach(function (brick) {
        if (brick[1] === undefined) {
            rootBricks.push(brick[0]);
        }
    });

    return rootBricks;
};

module.exports = buildBricks;
