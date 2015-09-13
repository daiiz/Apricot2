'use strict';

var loadZumenFile = function () {
    var self = this;

    // 図面ファイル名を取得
    var zFileName = self.zumenFileName;
    // 図面データのJSONを読み込む
    var zumenJSON   = require('../../../zumen/simple');
    self.zumenColors = zumenJSON.colors;
    self.zumenParts = zumenJSON.parts;
    self.parentPart = undefined;

    // 座標解析
    for (var i = 0; i < self.zumenParts.length; i++) {
        var part = self.zumenParts[i];
        part.lt = getLeftTop(part);
        part.rb = getRightBottom(part);
    }

    // パーツが属する親パーツを決定する
    // parentPartIdx: パーツ or undefined
    // TODO: ループ回数見積もり
    for (i = 0; i < self.zumenParts.length; i++) {
        var partA = self.zumenParts[i]; // 着目するパーツ

        self.zumenParts.forEach(function (partB) {
            var included = isIncludedIn(partA, partB);
            //console.log('>>>> partA = %d, partB = %d, %s', partA.var, partB.var, included);
            if (included) {
                // 小さい方を登録する
                if (partA.parentPartIdx !== undefined) {
                    partA.parentPartIdx = +getSmaller(self.zumenParts[partA.parentPartIdx], partB).var;
                }else {
                    partA.parentPartIdx = +partB.var;
                }
            }
        });
        //console.log(partA);
    }
};

// 小さい方のパーツを返す
var getSmaller = function (partA, partB) {
    if (getPartSize(partA) < getPartSize(partB)) {
        return partA;
    }
    return partB;
}

// パーツの大きさを取得
var getPartSize = function (part) {
    // とりあえずは面積
    if (part === undefined) {
        // 無限大
        return 100000000000000;
    }
    return part.width * part.height;
}

// パーツの左上の座標を取得
var getLeftTop = function (part) {
    return [part.left, part.top];
};

// パーツの右下の座標を取得
var getRightBottom = function (part) {
    return [part.left + part.width, part.top + part.height];
};

// AはBに含まれるか（A is included in B）を判定する
var isIncludedIn = function (partA, partB) {
    // 左上の頂点のx座標の条件
    var p = partA.lt[0] > partB.lt[0];
    // 右上の頂点のx座標の条件
    var q = partA.lt[0] + partA.width < partB.lt[0] + partB.width;
    // 左上の頂点のy座標の条件
    var r = partA.lt[1] > partB.lt[1];
    // 左下の頂点のy座標の条件
    var s = partA.lt[1] + partA.height < partB.lt[1] + partB.height;

    return (p && q && r && s);
};

module.exports = loadZumenFile;
