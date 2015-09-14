'use strict';

var View = require('../src/Apricot/Document/View');
var Zumen = require('../src/Apricot/Document/Zumen');
var Brick = require('../src/Apricot/Document/Brick');

var zumen = new Zumen({id: 'zumen'}, 'simple');
//var zumen2 = new Zumen({id: 'zumen2'}, 'simple2');
zumen.addRecipe('design', {
    Visible: true
});

var view = new View({id: 'main'});
view.addZumen([zumen]);

view.generateHTML('foo.html');
