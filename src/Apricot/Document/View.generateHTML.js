'use strict';

var jsdom = require('jsdom');

var generateHTML = function (htmlFileName, idMap) {
    var self = this;

    // self.zumens のデータを用いて self.zumenDom が生成される
    self.makeDom();

    // ユーザー指定のDOM調整を行う準備
    var html = '<html>';
    self.zumenDom.forEach(function (dom) {
        html += dom.outerHTML;
    });
    html += '</html>';
    var outputDocument = jsdom.jsdom(html);

    // idの置換
    if (idMap !== undefined) {
        var originalIds = Object.keys(idMap);
        originalIds.forEach(function (originalId) {
            outputDocument.getElementById(originalId).id = idMap[originalId];
        });
    }

    console.log(outputDocument.childNodes[0].outerHTML);    // <html>
    return htmlFileName;
};

module.exports = generateHTML;
