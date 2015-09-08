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

        // 図面のなかを解析する
        var bricks = zumen.bricks;
        bricks.forEach(function (brick) {
            // brick --> DOM
        });

        // HTMLを生成する
        var zumenElem = createZumenHtml(doc, role, prop, data);
        // スタイルを適用する
        zumenElem = createZumenStyle(zumenElem, design);

        self.zumenDom.push(zumenElem);
    });

    self.dom = {};
};

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

var createZumenStyle = function (elem, design) {
    return elem;
};

module.exports = makeDom;
