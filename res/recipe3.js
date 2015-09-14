'use strict';

var View = require('../src/Apricot/Document/View');
var Zumen = require('../src/Apricot/Document/Zumen');
var Brick = require('../src/Apricot/Document/Brick');

var base  = new Zumen({id: 'base'}, 'base');
var panel = new Zumen({id: 'panel'}, 'panel');
var card  = new Zumen({id: 'card'}, 'card');

base.addRecipe('design', {
    Visible: true
});

var view = new View({id: 'main'});
view.addZumen([base, panel, card]);

view.generateHTML('bar.html');
