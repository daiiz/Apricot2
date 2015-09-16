'use strict';

var execsyncs = require('execsyncs');
var path = require('path');

var scanZumen = function (zumenFileName) {
    var home = getApricotHome();
    var cmd = 'sh '+ home +'scan.sh '+ zumenFileName;
    var result = "" + execsyncs(cmd);
    console.log(result);
};

var getApricotHome = function () {
    // プロジェクトホームを指すための相対パス
    var dirApricotHome = '../../../';
    // Zumen.scanZumen.jsの場所を取得する
    var basePath = __dirname;
    // プロジェクトホームの絶対パスを得る
    var pathApricotHome = path.resolve(basePath + '/' + dirApricotHome);
    if (pathApricotHome[pathApricotHome.length - 1] !== '/') {
        pathApricotHome = pathApricotHome + '/';
    }
    return pathApricotHome;
}

module.exports = scanZumen;
