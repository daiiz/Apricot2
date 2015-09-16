'use strict';

var addHead = function (elems) {
    var self = this;

    if (elems !== undefined) {
        elems.forEach(function (elem) {
            self.userHead.push(elem);
        });
    }

    return self.userHead.length;
};

module.exports = addHead;
