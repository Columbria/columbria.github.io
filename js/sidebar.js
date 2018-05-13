$( function() {
    $('#searchButton').on('click', function (e) {
        $('#searchResults').show();
    });

    $('.media-item').on('click', function (e) {
        $('.media-item').removeClass('active');
        $(e.target).closest('.media-item').addClass('active');

        $('.show-on-search').hide();
        $('.show-on-results').show();
        $('.media-item:not(.active)').hide();
    });

    $('#refineResultsButton').on('click', function (e) {
        $('.show-on-search').show();
        $('.show-on-results').hide();
        $('.media-item:not(.active)').show();
    });


});