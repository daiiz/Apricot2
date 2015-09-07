'use strict';

var _ = require('underscore');

// Apricot.*
window.Apricot = _.extend((window.Apricot || {}), {
    Base : require('./Apricot/Base')
});
