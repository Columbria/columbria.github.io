  $( function() {
    $( "#resizable" ).resizable({
      handles:"e"
    });

     $( "#slider-3" ).slider({
               range:true,
               min: 1,
               max: 3,
               values: [ 1, 3 ],

               slide: function( event, ui ) {

                  var folder = $('.media-item.active').data('index');
                  console.log(folder);
                  if(folder) {
                     $("#resizable").css("background-image", "url(./img/" + folder + "/" + ui.values[ 0 ] + ".jpg)");
                     $("#map-wrapper").css("background-image", "url(./img/" + folder + "/" + ui.values[ 1 ] + ".jpg)");
                }
               }
            });
        
  } );
