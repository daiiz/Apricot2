'use strict';

var View = require('../src/Apricot/Document/View');
var Zumen = require('../src/Apricot/Document/Zumen');
var Brick = require('../src/Apricot/Document/Brick');

var zumen = new Zumen({id: 'zumen'}, 'simple');
//var zumen2 = new Zumen({id: 'zumen2'}, 'simple2');
zumen.addRecipe('design', {
    Visible: true
});

zumen.bricks[0].bricks[0].addRecipe('design', {
    BrickColor: '#000',
    Width     : 130
});

var input = new Brick().is('input');
input.addRecipe('design', {
    Width: 100,
    Top  : 10,
    Left : 10,
    cursor: 'pointer'
});
input.addRecipe('prop', {
    placeholder: 'Foo!'
});

zumen.bricks[0].bricks[0].addBrick([input]);

var view = new View({id: 'main'});
view.addZumen([zumen]);

view.generateHTML('foo.html');
