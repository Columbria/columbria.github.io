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
        //var index = $('.media-item.active').data('index');
        updateMap();
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


function updateMap() {
    $('#slider-3').show();
    $('#resizable').show();
    //console.log('initSlider ' + index);
     var picture = $('#slider-3').slider("option", "values");
     var folder = $('.media-item.active').data('index');
     console.log("Folder: " + folder + " Pictures: " + picture[ 0 ]);
     $("#slider-3").slider( 'values' , 0, 1);
     $("#slider-3").slider( 'values' , 1, 3);
     if(folder) {
        $("#resizable").css("background-image", "url(./img/" + folder + "/" + picture[ 0 ] + ".jpg)");
        $("#map-wrapper").css("background-image", "url(./img/" + folder + "/" + picture[ 1 ] + ".jpg)");
    }
 //    console.log("test");
}