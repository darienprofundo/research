//====================================variables
let map;

//====================================preload
function preload() {

}
//====================================setup
function setup() {


}

//===================================map elements
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
//===================================draw
function draw() {

}
//====================================geolocation available
if('geolocation' in navigator) {
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;
    //console.log(position);

    const data = { lat, lon};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/api', options).then(response => {
      console.log(response);
    });
});
//======================================geolocation not available
} else {
  console.log("geolocation IS NOT available");
}

//=======================================where is ISS
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

  console.log(latitude);
    console.log(longitude);
}

getISS();
