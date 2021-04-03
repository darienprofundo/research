
// var token = "https:kc.kobotoolbox.org/api/v1/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";

var map;


function preload() {
  // darienPhoto = loadImage('media/2F23-11_43_17.jpg');

}

function setup() {
    createCanvas(800, 800);


}

//======================================= async/await function


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
// ======================================= Loader
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyDHQYLCvwlryQ37bsv1qgjmEpQ47PLaQ20",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};
// =========================================


// ========================================= Promise
loader
  .load()
  .then(() => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    // do something
  });
// ========================================== Draw
function draw() {

  background(135, 157, 207);
  console.log(myCall);

  // catchPhoto().catch(error => {
  //     console.log("error");
  //     console.error(error);
  //   });
}


// var locationData;
//
// function preload(){
//     locationData =  getCurrentPosition();
// }
//
// function setup() {
// 	createCanvas(500, 500) ;
//
// }
//
// function draw() {
// 	fill(0) ;
// 	textSize(12) ;
// 	text("hello", 20, 20) ;
//     text(locationData.latitude, 40, 40) ;
//     text(locationData.longitude, 40, 60) ;
//     text(locationData.accuracy, 40, 80) ;
//     text(locationData.altitude, 40, 100) ;
//     text(locationData.altitudeAccuracy, 40, 120) ;
//     text(locationData.heading, 40, 140) ;
//     text(locationData.speed, 40, 160) ;
//
// }
