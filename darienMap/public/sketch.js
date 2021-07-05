
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
  kobo = json.kobo;
  document.getElementById('summary').textContent = weather.summary;
  document.getElementById('temp').textContent = weather.temperature;

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

}
