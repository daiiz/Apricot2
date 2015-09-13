'use strict';

var generateHTML = function (htmlFileName) {
    var self = this;

    // self.zumens のデータを用いて self.zumenDom が生成される
    self.makeDom();

    self.zumenDom.forEach(function (dom) {
        console.log(dom.outerHTML);
    });

    return htmlFileName;
};

module.exports = generateHTML;
