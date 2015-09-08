// レシピが更新されたときに実行されて、self.domを更新する
var makeDom = function () {
    var self = this;

    var r = self.recipe;
    var d = self.document;

    var root = d.createElement(r.role);

    self.dom = root;
};

module.exports = makeDom;
