//====================================variables
//const mymap = L.map('mapid').setView([8.15, -78.0], 9);

//tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=1465c0f0a7fe4e91a7eb742506518845

//Maps © Thunderforest, Data © OpenStreetMap contributors

// Maps © www.thunderforest.com, Data © www.osm.org/copyright
//https://api.wheretheiss.at/v1/satellites/25544


const api_url ='https://api.wheretheiss.at/v1/satellites/25544';
let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  const {latitude, longitude} = data;
  marker.setLatLng([latitude, longitude]);
  marker.setLatLng([latitude, longitude]);
  if (firstTime) {
    mymap.setView([latitude, longitude], 4);
    firstTime = false;
  }

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

}
getISS();
setInterval(getISS, 1000);
