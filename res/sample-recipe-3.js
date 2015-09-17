var zumen = new Zumen({id: 'zumen'}, 'simple');
zumen.addRecipe('design', {
    Visible: true
});

zumen.b(0).b(0).addRecipe('design', {
    BrickColor: '#000',
    Width     : 130
});

var input = new Brick().is('input');
input.addRecipe('design', {
    Width: 'full',
    Height: 30,
    Top  : 9,
    cursor: 'pointer'
});
input.addRecipe('prop', {
    placeholder: 'Foo!'
});

zumen.b(0).b(0).addBrick([input]);


var view = new View({id: 'main'});
view.addZumen([zumen]);

view.generateHTML('foo.html', {
    'simple-1': 'black-div'
});
