'use strict';
var View  = require('../src/Apricot/Document/View');
var Zumen = require('../src/Apricot/Document/Zumen');
var Brick = require('../src/Apricot/Document/Brick');

var base  = new Zumen({id: 'base'}, 'base', true);
var panel = new Zumen({id: 'panel'}, 'panel');
var card  = new Zumen({id: 'card'}, 'card');

base.b(0).b(0).addRecipe('design', {
    'z-index': 1000,
    'cursor' : 'pointer'
});

var view = new View({id: 'main'});
view.addZumen([base, panel, card]);

view.addToHead([
    '<title>Sample App</title>'
]);

view.addScript(['jquery.min.js', 'user.js']);

view.generateHTML('index.html');

view.generateChromeAppManifest('Recipe3 App',
    {
        width: 480,
        height: 640,
        icon: 'apricot_icon.png',
        description: 'Painting!'
    }
);
