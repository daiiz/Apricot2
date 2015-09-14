'use strict';

var is = function (tagName) {
    var self = this;

    self.recipe.role = tagName || 'div';
    return self;
};

module.exports = is;
