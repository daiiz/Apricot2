console.info('Apricot2');

// 基本情報を得ることができる
var Base = new Apricot.Base();

// 第2引数に与えた図面ファイルから Apricot Zumen Model を得る
// 図面ファイルが省略された場合は空のAZMを返す
var z1 = new Apricot.Document.Zumen({id: 'zumen1'});
var z2 = new Apricot.Document.Zumen({id: 'zumen2'});
z1.addRecipe('design', {
    Width     : 'full',
    Height    : 185,
    BrickColor: 'random'
});
z2.addRecipe('design', {
    Width     : 'full',
    Height    : 60,
    Visible   : true,
    BrickColor: 'random'
})

// Apricot Brick Model を生成する
// これで生成されるものはAZM.bricksの要素と同じデータ構造をもつ
var b1 = new Apricot.Document.Brick({id: 'brick1'});
var b2 = new Apricot.Document.Brick({id: 'brick2'});
b1.addRecipe('design', {
    Width     : 150,
    Height    : 50,
    top       : 5,
    left      : 5,
    BrickColor: '#ccc',
    display   : 'block'
});

b2.recipe.role = 'input';
b2.addRecipe('design', {
    top       : 5,
    left      : 5,
    display   : 'block'
});

// 生成したAMMはAZMに追加しないと表示されない
b1.addBrick([b2]);
z2.addBrick([b1]);

// Document Object Model （DOM）を取得する
var v = new Apricot.Document.View({id: 'view1'});
v.addZumen([z1, z2]);

// TODO: 自動でやって欲しい感ある
v.makeDom();

// TODO: APIを用意する
v.zumenDom.forEach(function (zumen) {
    document.body.appendChild(zumen);
});
v.zumenDom[0].style.display = 'block';
