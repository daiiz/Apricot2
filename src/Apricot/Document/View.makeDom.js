// 図面配列が更新されたときに実行されて、self.domを更新する
var makeDom = function () {
    var self = this;

    var zumens = self.zumens;
    var doc = self.document;
    // zumen --> dom
    self.zumenDom = [];

    // 図面を1つずつ見る
    zumens.forEach(function (zumen) {
        var recipe = zumen.recipe;
        var role   = recipe.role || 'div';
        var prop   = recipe.prop || {};
        var design = recipe.design || {};
        var data   = recipe.data || {};

        // HTMLを生成する
        var zumenElem = createHtml(doc, role, prop, data);
        // スタイルを適用する
        zumenElem = applyStyle(zumenElem, design);

        // 図面のなかを解析する
        var bricks = zumen.bricks;
        bricks.forEach(function (brick) {
            brick.traceBricksId = [brick.id];
            // brick --> DOM
            // zumenElemの中に挿入する
            var recipe = brick.recipe;
            var role   = recipe.role || 'div';
            var prop   = recipe.prop || {};
            var design = recipe.design || {};
            var data   = recipe.data || {};
            var rootBrickDom = createHtml(doc, role, prop, data);
            rootBrickDom = applyStyle(rootBrickDom, design);

            // ブリック木を探索してbrick.bricksDomにDOMを格納する
            // bricksDomは、ブリック木に含まれるブリックを平らに集めた配列
            var copy_bricks = brick.bricks.concat();
            brick.bricksDom = [];
            walkBrick(brick, brick, doc);
            brick.bricks = copy_bricks;

            // brickDomを生成する
            brick.brickDom = createBrickDom(brick.bricksDom, rootBrickDom);
            brick.bricksDom = [];

            if (brick.brickDom !== undefined) {
                zumenElem.appendChild(brick.brickDom);
            }
        });

        self.zumenDom.push(zumenElem);
    });

    self.dom = {};
};

// 親idを調べて入れ子にしてゆき、ひとつの要素を仕上げる
var createBrickDom = function (bricksDom, rootBrickDom) {
    var rootBrickId = rootBrickDom.id;

    // bricksDom を先頭から１つずつ見てゆき、入れ子形を完成させる
    for (var i = 0; i < bricksDom.length; i++) {
        var brickInfo = bricksDom[i];
        var brick = brickInfo[0];   // 挿入するbrick
        var parentBrickId = brickInfo[1];
        var insertId = brick.id;

        for (var j = 0; j < bricksDom.length; j++) {
            var brickInfo = bricksDom[j];
            var brickId = brickInfo[1]; // 親brickId
            // 親id と 挿入要素id が一致したら挿入
            if (insertId === brickId) {
                brickInfo[0].appendChild(brick);
            }
        }
    }

    // rootBrickの直下に入れる
    for (i = 0; i < bricksDom.length; i++) {
        var brickInfo = bricksDom[i];
        var brick = brickInfo[0];   // 挿入するbrick
        var brickId = brickInfo[1]; // 親brickId
        if (rootBrickId === brickId) {
            rootBrickDom.appendChild(brick);
        }
    }

    return rootBrickDom;
};

// Brickに内包されるBrickを探索しながら、BrickのDOMを完成させる
// 引数は長男(b0)
// 長男次弟表現で表されている木を探索する
var walkBrick = function (brick, root, doc) {
    // TODO: docを渡さない方法はないか
    var firstChild = brick.bricks[0];   // b0

    // 階層ごとに読まれる
    if(brick.bricks.length > 0) {
        var children = brick.bricks;    // [b0, b, ..., b]

        // 兄弟を読む
        children.forEach(function (child) {
            var recipe = child.recipe;
            var role   = recipe.role || 'div';
            var prop   = recipe.prop || {};
            var design = recipe.design || {};
            var data   = recipe.data || {};
            // HTMLを生成する
            var brickElem = createHtml(doc, role, prop, data);
            brickElem = applyStyle(brickElem, design);
            root.bricksDom.push([brickElem, child.parentBrick]);

            root.traceBricksId.push(child.id);
        });
        walkBrick(firstChild, root, doc);
    }

    // rootの兄弟をひとつ進める
    root.bricks.shift();
    if (root.bricks.length > 0) {
        walkBrick(root.bricks[0], root, doc);
    }

    return true;
};

// DOMを生成する
var createHtml = function (doc, role, prop, data) {
    var elem = doc.createElement(role);
    // 要素に属性を設定
    var attrs = Object.keys(prop);
    attrs.forEach(function (attr) {
        var val = prop[attr];
        elem.setAttribute(attr, val);
    });
    // dataset属性を設定
    attrs = Object.keys(data);
    attrs.forEach(function (attr) {
        val = data[attr];
        attr = 'data-' + attr;
        elem.setAttribute(attr, val);
    });

    return elem;
};

// DOM要素を、スタイルを当てて返す
var applyStyle = function (elem, design) {
    var attrs = Object.keys(design);
    attrs.forEach(function (attr) {
        // 頭文字が小文字のときはそのままCSS
        if (attr[0].match(/[a-z]/)) {
            elem.style[attr] = design[attr];
        }else {
            var css = createCSS(attr, design[attr]);
            var attr = css[0];
            var val = css[1];
            elem.style[attr] = val;
        }
    });
    return elem;
};

// Apricot独自記法のCSSを、標準CSSに翻訳する
var createCSS = require('./View.translateCSS');

module.exports = makeDom;
