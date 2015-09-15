'use strict';

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

var generateChromeAppManifest = function (appName, option) {
    var self = this;

    // bindする情報
    var name = appName || 'Apricot 2.0';
    var description = option.description || 'Apricot 2.0 Demo App.';
    var version = option.version || '0.0.1';
    var icon16  = option.icon16 || option.icon;
    var icon48  = option.icon48 || option.icon;
    var icon128 = option.icon128 || option.icon;

    var contents = [
        '{',
        '   "name": "{}",'.format(name),
        '   "description": "{}",'.format(description),
        '   "version": "{}",'.format(version),
        '   "manifest_version": 2,',
        '   "app": {',
        '       "background": {',
        '           "scripts": ["background.js"]',
        '       }',
        '   },',
        '   "icons": {',
        '       "16" :  "{}",'.format(icon16),
        '       "48" :  "{}",'.format(icon48),
        '       "128":  "{}"'.format(icon128),
        '   },',
        '   "permissions": ["storage", "unlimitedStorage", "<all_urls>", "webview"]',
        '}'
    ];

    var jsonString;
    contents.forEach(function (txt) {
        
    })

    console.log(contents);
};

module.exports = generateChromeAppManifest;
