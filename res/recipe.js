var zumen = new Zumen({id: 'zumen'}, 'simple');
zumen.addRecipe('design', {
    Visible: true
});

// className追加の関数を用意する

var view = new View({id: 'main'});
view.addZumen([zumen]);

view.generateHTML('index.html', {
    'simple-1': 'black-div'
});

view.generateChromeAppManifest('Recipe3 Simple App',
    {
        width: 478,
        height: 339,
        icon: 'apricot_icon.png',
        description: 'Painting!'
    }
);
