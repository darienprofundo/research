//jQuery.getJSON(url [,data][,success]);
//API key 2c773a1c48ccd8af2f3ec3213441df8ea023a9b8

//https://kf.kobotoolbox.org/api/v2/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8/data/What_did_you_find
//https://kc.kobotoolbox.org/api/v1/data/616797.json
//============================== fetch()
//============================== URL.createObjectURL()
// var token = "https:kc.kobotoolbox.org/api/v1/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";

var smPhoto = 'download_small_url';
var mdPhoto = 'download_medium_url';
var lgPhoto = 'download_large_url';
var mimetype;
var myFind = 'What_did_you_find';
var siteDet = 'group_ve9cv03';
var petro = 'petroglyph';
var gndstn = 'groundstone';
var chipstn = 'chipped_stone';

var findCat = ['site, mound, petro, gndstn, chipstn, ceramic, flora, fauna, other'];
var filename;


function preload() {
  // darienPhoto = loadImage('media/2F23-11_43_17.jpg');

}

function setup() {
    createCanvas(800, 800);

    var myJSONString = 'https://kc.kobotoolbox.org/api/v1/data/639284.json';
    var myIDString = '2c773a1c48ccd8af2f3ec3213441df8ea023a9b8'; // Take out the x’s and ADD YOUR ID!!!
    loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}

//======================================= async/await function
function gotData(data) {
myCall = myFind.findCat;
  // ws = weather.wind.speed;
  // temperature = weather.main.temp;
  // for debugging purposes, print out the JSON data when we get it.
  console.log(data);

}

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
