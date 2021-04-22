//====================================variables

//====================================preload
function preload() {

}
//====================================setup
function setup() {


}
//==============================my map function
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.9, lng: 151.2 },
  });
  setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

async function getData() {
  const response = await fetch('/api');
  const data = await response.json;
  console.log(data);
}
  // mymap.on('zoomend', function() {
  //   const zoom = mymap.getZoom() + 1;
  //   const w = 50 * zoom;
  //   const h = 32 * zoom;
  //   issIcon.options.iconSize = [w, h];
  //   issIcon.options.iconAnchor = [w / 2, h / 2];
  //   mymap.removeLayer(marker);
  //   let latlng = marker.getLatLng();
  //   marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);
  //   marker.setLatLng(latlng);
  // });

  // const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
  //
  // let firstTime = true;
  //
  // async function getISS() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { latitude, longitude } = data;
  //
  //   marker.setLatLng([latitude, longitude]);
  //   if (firstTime) {
  //     mymap.setView([latitude, longitude], 2);
  //     firstTime = false;
  //   }
  //   document.getElementById('lat').textContent = latitude.toFixed(2);
  //   document.getElementById('lon').textContent = longitude.toFixed(2);
  // }
  //
  // getISS();
  // setInterval(getISS, 1000);

//===================================Darien map
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: { lat: 8.15, lng: -78.0 },
//   });
// }
//===================================draw
function draw() {

}
//====================================geolocation available
// document.getElementById('geolocate').addEventListener('click', event => {
//   if ('geolocation' in navigator) {
//     console.log('geolocation available');
//   navigator.geolocation.getCurrentPosition(position => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     document.getElementById('latitude').textContent = lat;
//     document.getElementById('longitude').textContent = lon;
//     //console.log(position);
//
//
//     const data = { lat, lon};
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//     fetch('/api', options).then(response => {
//       console.log(response);
//     });
// });
// //======================================geolocation not available
// } else {
//   console.log("geolocation IS NOT available");
// }

//-----------------------------------------------

//-----------------------------------------------

//=======================================where is ISS
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
