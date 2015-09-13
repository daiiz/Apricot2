var translateCSS = function (attr, val) {
    // 横幅の大きさを返す
    if (attr === 'Width') {
        if (val === 'full') {
            return ['width', window.innerWidth];
        }
        return ['width', val];
    }

    // 高さを返す
    else if (attr === 'Height') {
        if (val === 'full') {
            return ['height', window.innerHeight];
        }
        return ['height', val];
    }

    // top を返す
    else if (attr === 'Top') {
        return ['top', val];
    }

    // left を返す
    else if (attr === 'Left') {
        return ['left', val];
    }

    // 背景色をランダムに返す
    else if (attr === 'BrickColor') {
        if (val === 'random') {
            return ['backgroundColor', getRandomRGB()]
        }
        return ['backgroundColor', val];
    }

    // 表示／非表示状態を返す
    else if (attr === 'Visible') {
        if (val === true) {
            return ['display', 'block'];
        }
        return ['display', 'none'];
    }

    return [attr, val];
};

var getRandomRGB = function() {
    var r = Math.floor(Math.random() * 255).toString(16) + '';
    if (r.length === 1) {
        r = '0' + r;
    }
    var g = Math.floor(Math.random() * 255).toString(16);
    if (g.length === 1) {
        g = '0' + g;
    }
    var b = Math.floor(Math.random() * 255).toString(16);
    if (r.length === 1) {
        b = '0' + b;
    }
    return "#" + r + g + b;
};

module.exports = translateCSS;
