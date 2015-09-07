console.info('Apricot2');

// 基本情報を得ることができる
var Base = new Apricot.Base();

// 第2引数に与えた図面ファイルから Apricot Zumen Model （AZM）を得る
// 図面ファイルが省略された場合は空のAZMを返す
var Azm = new Apricot.Document.Zumen({id: 'zumen1'});

// Apricot Module Model （AMM） を生成する
// これで生成されるものはAZM.modulesの要素と同じデータ構造をもつ
// var Amm = new Apricot.Document.Module({id: 'module1'});

// 生成したAMMはAZMに追加しないと表示されない
// Azm.addModule([Amm]);

// Document Object Model （DOM）を取得する
// var Dom = new Apricot.Document.Dom([Azm]);
