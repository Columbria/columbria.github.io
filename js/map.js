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

                  $("#resizable").css("background", "url(./img/" + ui.values[ 0 ] + ".jpg)  no-repeat center center");
                  $("#map-wrapper").css("background", "url(./img/" + ui.values[ 1 ] + ".jpg)  no-repeat center center");
                  //$("p").css("background-color", "yellow");
               }
            });
        
  } );


			