'use strict';

var addScript = function (scripts) {
    var self = this;

    if (scripts !== undefined) {
        scripts.forEach(function (script) {
            self.userScripts.push(script);
        });
    }

    return self.userScripts.length;
};

module.exports = addScript;
