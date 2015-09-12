'use strict';

var addRecipe = function (recipeKey, newRecipe) {
    var self = this;

    var attrs = Object.keys(newRecipe);
    var recipe = self.recipe[recipeKey];
    attrs.forEach(function (attr) {
        recipe[attr] = newRecipe[attr];
    });
    return true;
};

module.exports = addRecipe;
