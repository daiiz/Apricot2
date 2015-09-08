// self.recipe のメンバを初期化する
var initRecipe = function () {
    var self = this;

    // デフォルトのdesign CSSを指定
    self.recipe.design = {
        position: 'absolute',
        display : 'none'
    };

    // 位置を(0px, 0px)に指定
    self.recipe.design.top = 0;
    self.recipe.design.left = 0;

    // デフォルトのpropertyを指定
    self.recipe.prop = {
        id: self.id
    };

    // デフォルトのdatasetを指定
    self.recipe.data = {
        'unique-id': self.uniqueId
    }
};

module.exports = initRecipe;
