// 図面配列が更新されたときに実行されて、self.domを更新する
var makeDom = function () {
    var self = this;

    var zumens = self.zumens;
    var doc = self.document;
    // zumen --> dom
    self.zumenDom = [];
    self.brickDom = [];

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
        zumenElem = createStyle(zumenElem, design);

        // 図面のなかを解析する
        var bricks = zumen.bricks;
        bricks.forEach(function (brick) {
            // brick --> DOM
            // zumenElemの中に挿入する
            brick.traceBricksId = [brick.id];
            var brickDom = walkBrick(brick, brick);
            if (brickDom !== undefined) {
                zumenElem.appendChild(brickDom);
            }
        });

        self.zumenDom.push(zumenElem);
    });

    self.dom = {};
};

// Brickに内包されるBrickを探索しながら、BrickのDOMを完成させる
// 引数は長男(b0)
// 長男次弟表現で表されている木を探索する
var walkBrick = function (brick, root) {
    var firstChild = brick.bricks[0];   // b0

    // 階層ごとに読まれる
    if(brick.bricks.length > 0) {
        var children = brick.bricks;    // [b0, b, ..., b]

        children.forEach(function (child) {
            // 兄弟を読む
            root.traceBricksId.push(child.id);
        });
        walkBrick(firstChild, root);
    }

    // rootの兄弟をひとつ進める
    root.bricks.shift();
    if (root.bricks.length > 0) {
        walkBrick(root.bricks[0], root);
    }

    return undefined;
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
var createStyle = function (elem, design) {
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
