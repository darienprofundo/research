var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var y = 0;
var ws = 0;

function preload() {
  cloud = loadImage('assets/Cloud.png');
  myTherm = loadImage('assets/Thermometer.png');
  grid = loadImage('assets/grid.png')
  therm1 = loadImage('assets/therm1.png')
}

function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!
  var formID = "639284";
var url = "https://kc.kobotoolbox/api/v1/data/";
  var myKey = "2c773a1c48ccd8af2f3ec3213441df8ea023a9b8"; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(url + myKey, gotData); // look - that gotData function happens when JSON comes back.

}

function gotData(data) {
  console.log(data);

}
