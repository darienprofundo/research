
<<<<<<< HEAD
const zoom = 1;
const geolocal;
=======
<<<<<<< HEAD
const zoom = 1;
const geolocal;

geolocal = loadStrings('assets/Darien_Profundo_excelExport.csv');

  for (var i = 1; i < geolocal.length; i++) {
    var data = geolocal[i].split(/,/);
    console.log(data);
    var lat = data[2];
    var lon = data[3];
    // var type = data[8];

    // This addition fixes the case where the longitude is non-zero and
    // points can go off the screen.
    if (x < -width / 2) {
      x += width;
    } else if (x > width / 2) {
      x -= width;
    }

  }
}


//=======initial view of map
=======
const data = { lat, lon, _geolocation };
const options = {
  method: 'GET'
};
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb

geolocal = loadStrings('assets/Darien_Profundo_excelExport.csv');

  for (var i = 1; i < geolocal.length; i++) {
    var data = geolocal[i].split(/,/);
    console.log(data);
    var lat = data[2];
    var lon = data[3];
    // var type = data[8];

<<<<<<< HEAD
    // This addition fixes the case where the longitude is non-zero and
    // points can go off the screen.
    if (x < -width / 2) {
      x += width;
    } else if (x > width / 2) {
      x -= width;
    }

  }
}


//=======initial view of map
=======
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb
let firstTime = true;

  const { lat, lon } = data;
  marker.setLatLng([lat, lon]);
  marker.setLatLng([lat, lon]);
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb
  if (firstTime) {
    mymap.setView([lat, lon], 4);
    firstTime = false;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  kobo = json.kobo;
  document.getElementById('summary').textContent = weather.summary;
  document.getElementById('temp').textContent = weather.temperature;

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

}
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb
