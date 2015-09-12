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
        var zumenElem = createZumenHtml(doc, role, prop, data);
        // スタイルを適用する
        zumenElem = createZumenStyle(zumenElem, design);

        // 図面のなかを解析する
        var bricks = zumen.bricks;
        bricks.forEach(function (brick) {
            // brick --> DOM
            // zumenElemの中に挿入する
        });

        self.zumenDom.push(zumenElem);
    });

    self.dom = {};
};

// 図面を表すDOMを生成する
var createZumenHtml = function (doc, role, prop, data) {
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

// 図面を表すDOM要素を、スタイルを当てて返す
var createZumenStyle = function (elem, design) {
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
var createCSS = function (attr, val) {
    // 横幅の大きさを返す
    if (attr === 'Width') {
        if (val === 'full') {
            return ['width', window.innerWidth];
        }
        return ['width', val];
    }

    // 高さを返す
    else if (attr === 'Height') {
        if (val === 'full') {
            return ['height', window.innerHeight];
        }
        return ['height', val];
    }

    // 背景色をランダムに返す
    else if (attr === 'BrickColor') {
        if (val === 'random') {
            return ['backgroundColor', getRandomRGB()]
        }
        return ['backgroundColor', val];
    }

    // 表示／非表示状態を返す
    else if (attr === 'Visible') {
        if (val === true) {
            return ['display', 'block'];
        }
        return ['display', 'none'];
    }

    return [attr, val];
};

var getRandomRGB = function() {
    var r = Math.floor(Math.random() * 255).toString(16) + '';
    if (r.length === 1) {
        r = '0' + r;
    }
    var g = Math.floor(Math.random() * 255).toString(16);
    if (g.length === 1) {
        g = '0' + g;
    }
    var b = Math.floor(Math.random() * 255).toString(16);
    if (r.length === 1) {
        b = '0' + b;
    }
    return "#" + r + g + b;
}

module.exports = makeDom;
