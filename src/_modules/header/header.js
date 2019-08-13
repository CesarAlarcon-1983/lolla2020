'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var contentWrapper = $('.home__content__wrapper--middle');
    var mainWrapper = $('.js-wrapper');
    var closeButton = $('.home__content__close-button');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    var targets = $('[data-target]');
    var contents = $('[data-content]');

    function init() {
        mainWrapper.addClass('-active')
    }

    closeButton.on('click', function() {
        targets.removeClass('-active');
        contents.removeClass('-active');
        mainWrapper.addClass('-active')

    });

    if (targets.length > 0) {
        targets.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var targettedContent = $this.data('target');

            targets.removeClass('-active');
            contents.removeClass('-active');
            mainWrapper.removeClass('-active')
            $('[data-content="'+ targettedContent +'"]').addClass('-active');
        });
    }
    
    init();
};

module.exports = Header;
