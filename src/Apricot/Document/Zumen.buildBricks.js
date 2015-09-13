'use strict';

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
            top   : part.top,
            left  : part.left,
            width : part.width,
            height: part.height
        });
        brick.addRecipe('data', {
            zumenFileName: zumenFile
        });
        // brickと親brickのidxを併せて保持する
        bricks.push([brick, part.parentPartIdx]);
    }

    // brickの親子関係を構築する
    for (var i = 0; i < bricks.length; i++) {
        var brick = bricks[i][0];    // 着目するパーツ
        var brickId = brick.id;

        bricks.forEach(function (insertBrick) {
            var insertBrickParentId;
            if (insertBrick[1] !== undefined) {
                insertBrickParentId = zumenFile + '-' + insertBrick[1];
            }
            // id と parentPartIdx が一致したら挿入すべき
            console.log('>>>> ', brickId, insertBrickParentId);
        });
    }

    return true;
};

module.exports = buildBricks;
