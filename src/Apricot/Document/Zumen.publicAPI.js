'use strict';

var publicAPI = function (apiVersion) {
    var self = this;

    var apiSet = {};
    switch (apiVersion) {
        case 1:
            apiSet = {
                isVisible: self.isVisible,
                css      : self.css
            };
    }
    
    return apiSet;
};

module.exports = publicAPI;
