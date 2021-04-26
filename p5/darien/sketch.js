//====================================variables
let map;

//====================================preload
function preload() {
  ceramic = loadImage('assets/1x/ceramic.png');
  chip = loadImage('assets/1x/chip.png');
  fauna = loadImage('assets/1x/fauna.png');
  flora = loadImage('assets/1x/flora.png');
  ground = loadImage('assets/1x/ground.png');
  misc = loadImage('assets/1x/misc.png');
  mound = loadImage('assets/1x/mound.png');
  petro = loadImage('assets/1x/petro.png');
  site = loadImage('assets/1x/site.png');
//====================================setup
function setup() {


}

//===================================map elements
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 8.15, lng: -78.0 },
  });
}
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 8.15, lng: -78.0 },
  });
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  });
}


//===================================draw
function draw() {
initMap();
}


// const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
// async function getISS() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   const { latitude, longitude } = data;
//
//   document.getElementById('lat').textContent = latitude;
//   document.getElementById('lon').textContent = longitude;
//
//   console.log(latitude);
//   console.log(longitude);
// }
//
// getISS();
