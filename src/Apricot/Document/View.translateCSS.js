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

module.exports = translateCSS;
