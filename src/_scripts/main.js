// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var DataToggle = require('../_modules/data-switcher/data-toggle');
var VtrShuffle = require('./vtr-shuffle');
var VtrTrivia = require('./vtr-trivia');

$(function() {

    new Header();
    new Slider();
    new VtrShuffle();
    new VtrTrivia();
    new DataSwitcher();
    new DataToggle();
});
