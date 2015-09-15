'use strict';

var fs = require('fs');

// 唯一ファイルを生成できる関数
var fileWriter = function (fileName, dir, body) {
    // ファイルに書き込む内容を決定する
    body = body || 'Blank3';
    // ファイル名を決定する
    fileName = fileName || 'apricot.fileWriter.txt';
    // 保存場所を決定する
    dir = dir || '';
    //if (dir[dir.length - 1] !== '/') {
    //    dir += '/';
    //}
    fs.writeFile(dir + fileName, body, 'utf8', function (err) {
        console.log(err);
    });
    return true;
};

module.exports = fileWriter;
