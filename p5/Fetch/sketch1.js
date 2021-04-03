//jQuery.getJSON(url [,data][,success]);
//API key 2c773a1c48ccd8af2f3ec3213441df8ea023a9b8

//https://kf.kobotoolbox.org/api/v2/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8/data/What_did_you_find
//https://kc.kobotoolbox.org/api/v1/data/616797.json
//============================== fetch()
//============================== URL.createObjectURL()
var token = "https:kc.kobotoolbox.org/api/v1/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";
var darienPhoto;

function preload() {
  darienPhoto = loadImage('media/2F23-11_43_17.jpg/token');

}

function setup() {
    createCanvas(800, 800);

}

//======================================= async/await function
async function catchPhoto() {
fetch('media/2F23-11_43_17.jpg/token');
const response = await fetch(darienPhoto);
const blob = await response.blob();
document.getElementById(darienPhoto).blob();

}

function draw() {

  background(135, 157, 207);
  console.log('trying to fetch pictures');

  catchPhoto().catch(error => {
      console.log("error";
      console.error(error);
    });
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
