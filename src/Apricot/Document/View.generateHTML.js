'use strict';

var jsdom = require('jsdom');

var generateHTML = function (htmlFileName, idMap) {
    var self = this;
    self.htmlFileName = htmlFileName;

    // self.zumens のデータを用いて self.zumenDom が生成される
    self.makeDom();

    // ユーザー指定のDOM調整を行う準備
    var html = '<html>{}</html>';
    var body = '<body>{}</body>';

    var doms = '';
    self.zumenDom.forEach(function (dom) {
        doms += dom.outerHTML;
    });

    var scripts = '';
    self.userScripts.forEach(function (scriptPath) {
        // scriptPath: www/を基準とした相対パス
        scripts += '<script src="{}"></script>'.format(scriptPath);
    })
    doms += scripts;

    body = body.format(doms);
    html = html.format(body);
    var outputDocument = jsdom.jsdom(html);

    // idの置換
    if (idMap !== undefined) {
        var originalIds = Object.keys(idMap);
        originalIds.forEach(function (originalId) {
            outputDocument.getElementById(originalId).id = idMap[originalId];
        });
    }

    // HTMLファイルを出力する
    var html = self.fileWriter(htmlFileName, 'www', outputDocument.childNodes[0].outerHTML);
    console.log('>', html);

    return htmlFileName;
};

// Pythonのformat関数の基本的なやつを真似たもの
String.prototype.format = function() {
  var str = this.toString();
  var args = arguments;
  // {} の個数を確認
  var len_blanks = (str.match(/\{\}/g) || []).length;
  // 引数の個数を確認
  var len_args = args.length;
  // 個数が一致しない場合は文字列をそのまま返す
  if(len_args != len_blanks) return str;
  // 個数が一致していれば置換作業を行う
  for(var i=0; i < args.length; i++) {
    str = str.replace(/\{\}/, args[i]);
  }
  return str;
}

module.exports = generateHTML;
