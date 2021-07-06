var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 1;
var geolocal;

const data = { lat, lon, _geolocation };
const options = {
  method: 'GET'
};

const kobo_url = `kobo/${lat},${lon}`;
// const response = await fetch(kobo_url);
// const data = await response.json();


let firstTime = true;

  const { lat, lon } = data;
  marker.setLatLng([lat, lon]);
  marker.setLatLng([lat, lon]);

  if (firstTime) {
    mymap.setView([lat, lon], 4);
    firstTime = false;
  }
