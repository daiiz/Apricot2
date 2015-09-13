// self.recipe のメンバを初期化する
var initRecipe = function () {
    var self = this;

    // デフォルトのdesign CSSを指定
    self.recipe.design = {
        position: 'relative',
        display : 'block'
    };

    // 位置を(0px, 0px)に指定
    self.recipe.design.Top = 0;
    self.recipe.design.Left = 0;

    // デフォルトのpropertyを指定
    self.recipe.prop = {
        id: self.id,
        class: self.name
    };

    // デフォルトのdatasetを指定
    self.recipe.data = {
        'unique-id': self.uniqueId
    }
};

module.exports = initRecipe;
