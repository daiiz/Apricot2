'use strict';

var publicAPI = function (apiVersion) {
    var self = this;

    var apiSet = {version: 0};

    switch (apiVersion) {
        case 1:
            apiSet = {
                version: 1,
                isVisible: self.isVisible,
                css      : self.css
            };
    }

    return apiSet;
};

module.exports = publicAPI;
