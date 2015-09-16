'use strict';

var fs   = require('fs');
var path = require('path');

// 唯一ファイルを生成できる関数
// プロジェクトホームを基準とした相対パス
var fileWriter = function (fileName, dir, body) {

    // ファイルに書き込む内容を決定する
    body = body || 'Blank';
    // ファイル名を決定する
    fileName = fileName || 'apricot.fileWriter.txt';

    // プロジェクトホームを指すためのdir（デフォルトの保存場所）
    var dirApricotHome = '../../../';

    // 保存場所を決定する
    dir = dir || '';
    if (dir[0] !== '/') {
        dir = '/' + dir;
    }
    dir = dirApricotHome + dir;

   // fileWriter.jsの場所を取得する
    var basePath = __dirname;
    if (basePath[basePath.length - 1] !== '/') {
        basePath = basePath + '/';
    }

    var saveTo = path.resolve(basePath + dir);
    if (saveTo[saveTo.length - 1] !== '/') {
        saveTo = saveTo + '/';
    }
    var saveFilePath = saveTo + fileName;

    fs.writeFile(saveTo + fileName, body, 'utf8', function (err) {
    });

    // 保存したファイルの絶対パスを返す
    return saveFilePath;
};

module.exports = fileWriter;
