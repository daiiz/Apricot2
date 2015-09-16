'use strict';

var fs = require('fs');
var fw = require('./src/Apricot/Document/fileWriter');

var recipeName = process.argv[2];
if (recipeName === undefined) {
    return;
}

// 拡張子が付いていた場合はトル
recipeName = recipeName.replace(/\.js$/, '');

// パスが与えられた場合はファイル名だけ欲しい
var dirs = recipeName.split('/');
recipeName = dirs[dirs.length - 1];

// レシピの先頭に、requireすべきものを追記して、src/recipe.jsに書き出す
var recipePath = './res/' + recipeName + '.js';

var contents = [
    "'use strict';",
    "var View  = require('../src/Apricot/Document/View');",
    "var Zumen = require('../src/Apricot/Document/Zumen');",
    "var Brick = require('../src/Apricot/Document/Brick');"
];
var header = '';
contents.forEach(function (txt) {
    header += txt + '\n';
});

var recipeText = '';
fs.readFile(recipePath, 'utf8', function (err, txt) {
    recipeText = header + '\n' + txt;
    // 結合されたレシピを出力する
    var bundle = fw('bundleRecipe.js', 'res', recipeText);
    console.log('>', bundle);

    var rendeRecipe = function () {
        require('./res/bundleRecipe');
    };

    rendeRecipe();
});
