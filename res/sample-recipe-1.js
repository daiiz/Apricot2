var zumen = new Zumen({id: 'zumen'}, 'simple', true);

var view = new View({id: 'main'});
view.addZumen([zumen]);

view.generateHTML('index.html', {
    'simple-1': 'orange-div'
}, {
    'simple-1': 'a b c'
});

view.generateChromeAppManifest('Recipe3 Simple App',
    {
        width: 478,
        height: 339,
        icon: 'apricot_icon.png',
        description: 'Painting!'
    }
);
