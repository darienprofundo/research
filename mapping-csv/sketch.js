//====================================variables
//const mymap = L.map('mapid').setView([8.15, -78.0], 9);

//tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=1465c0f0a7fe4e91a7eb742506518845

//Maps © Thunderforest, Data © OpenStreetMap contributors

// Maps © www.thunderforest.com, Data © www.osm.org/copyright
//https://api.wheretheiss.at/v1/satellites/25544

// 7.8682° N, 77.8367° W
var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 1;
let lat = 7.8682;
let lon = -77.8367;

function mercX(lon) {
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  }

  var cx = mercX(clon);
  var cy = mercY(clat);
  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;
