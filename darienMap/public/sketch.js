
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

const kobo_url = `kobo/${lat},${lon}`;
// const response = await fetch(kobo_url);
// const data = await response.json();


>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
let firstTime = true;

  const { lat, lon } = data;
  marker.setLatLng([lat, lon]);
  marker.setLatLng([lat, lon]);
<<<<<<< HEAD

=======
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
  if (firstTime) {
    mymap.setView([lat, lon], 4);
    firstTime = false;
  }
<<<<<<< HEAD
=======
  kobo = json.kobo;
  document.getElementById('summary').textContent = weather.summary;
  document.getElementById('temp').textContent = weather.temperature;

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

}
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
