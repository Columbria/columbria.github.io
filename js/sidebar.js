$( function() {
    $('#searchButton').on('click', function (e) {
        $('#searchResults').hide();
        $('#loader').show();
        showResults(1000);
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

    //show results on page load
    showResults(3000);

    //init tabs
    $('.nav-tabs a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
});

function showResults(timeToSearch) {
    setTimeout(function() {
        $('#loader').hide();
        $('#searchResults').show();
    }, timeToSearch);
}