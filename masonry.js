var $container = $('.grid');

// initialize Masonry after all images have loaded  
$container.imagesLoaded( function() {
    $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

});