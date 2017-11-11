function initMap(coords,tabeldata) {
        var coordinates = [{
                            "lat": 32.686241,
                            "lng": -97.366099,
                            "customerName":"ben williams",
                            "customerAddress":"34 , ist aveneue"
                          },
                          {
                          "lat": 32.680607,
                          "lng": -97.359747,
                          "customerName":"Jim Williams",
                          "customerAddress":"#22 Park Aveneue"
                          },
                          {
                          "lat": 32.680687,
                          "lng": -97.377257,
                          "customerName":"John Joe",
                          "customerAddress":"34, Crown Aveneue"
                          },
                          {
                          "lat": 32.683063,
                          "lng": -97.348549,
                          "customerName":"Williams Smith",
                          "customerAddress":"2nd Floor, Royal Plaza"
                          },
                          {
                          "lat": 32.672948,
                          "lng": -97.392363,
                          "customerName":"Lee",
                          "customerAddress":"No 72, MG Road Aveneue"
                          },
                          {
                          "lat": 32.682340,
                          "lng": -97.38668,
                          "customerName":"Brake John",
                          "customerAddress":"#32, Last Aveneue"
                          }
                          ]
          if(coords !== undefined){
            coordinates = coords;
            var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 13,
                  center: {
                       "lat": coordinates[0].lat,
                       "lng": coordinates[0].lng
                 }
           });
          }
          else {
                var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 12,
                      center: {
                           "lat": coordinates[0].lat,
                           "lng": coordinates[0].lng
                     }
               });

          }
        var image = 'http://www.myiconfinder.com/uploads/iconsets/32-32-a5485b563efc4511e0cd8bd04ad0fe9e.png';

        for (var i = 0; i < coordinates.length; i++) {
           var contentString = "<p>some info here </h1>"
           var infowindow = new google.maps.InfoWindow({
           content: contentString
          });
          var marker = new google.maps.Marker({
          position: {
                "lat": coordinates[i].lat,
                "lng": coordinates[i].lng
          },
          map: map,
          icon: image,
          details:{
                "customerName":coordinates[i].customerName,
                "customerAddress":coordinates[i].customerAddress
          },
          title: 'Demo',
          animation: google.maps.Animation.DROP
        });

        // console.log(coordinates[i].lat,coordinates[i].lng);
        google.maps.event.addListener(marker, 'click', (function() {
          infowindow.open(map, this);
          $('.geobox').show(700);
          $('.geodetails').html("");
          var table = 'Equipment Details <center> <table class="table tclass" ><tr><td>Customer Name</td><td>'+this.details.customerName+'</td></tr><tr><td>Customer Address</td><td>'+this.details.customerAddress+'</td></tr></table></center>';
          $('.geodetails').html(table);
        }))
        }

      }
