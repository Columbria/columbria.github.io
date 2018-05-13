  $( function() {
    $( "#resizable" ).resizable({
      handles:"e"
    });

     $( "#slider-3" ).slider({
               range:true,
               min: 1,
               max: 9,
               values: [ 1, 3 ],

               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

                  $("#resizable").css("background-image", "url(./img/" + ui.values[ 0 ] + ".jpg)");
                  $("#map-wrapper").css("background-image", "url(./img/" + ui.values[ 1 ] + ".jpg)");
                  //$("p").css("background-color", "yellow");
               }
            });
        
  } );


			