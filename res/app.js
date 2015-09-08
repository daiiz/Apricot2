console.info('Apricot2');

// 基本情報を得ることができる
var Base = new Apricot.Base();

// 第2引数に与えた図面ファイルから Apricot Zumen Model （AZM）を得る
// 図面ファイルが省略された場合は空のAZMを返す
var z = new Apricot.Document.Zumen({id: 'zumen1'});

// Apricot Brick Model （ABM） を生成する
// これで生成されるものはAZM.bricksの要素と同じデータ構造をもつ
// var b = new Apricot.Document.Brick({id: 'brick1'});

// 生成したAMMはAZMに追加しないと表示されない
// z.addBrick([b]);

// Document Object Model （DOM）を取得する
var v = new Apricot.Document.View([z]);
