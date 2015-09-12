'use strict';

var setRecipe = function (recipeKey, newRecipe) {
    var self = this;

    if (recipeKey !== undefined) {
        var recipe = self.recipe[recipeKey];
        recipe = newRecipe;
        return true;
    }
    return false;
};

module.exports = setRecipe;
