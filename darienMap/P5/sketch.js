// Daniel Shiffman
// http://codingtra.in
// Earthquake Data Viz
// Video: https://youtu.be/ZiYdOwOrGyc

var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 1;
<<<<<<< HEAD
var geolocal;
=======
<<<<<<< HEAD
var geolocal;
=======
var earthquakes;
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage(
    'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
      clon +
      ',' +
      clat +
      ',' +
      zoom +
      '/' +
      ww +
      'x' +
      hh +
      '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw'
  );
  // earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
<<<<<<< HEAD
  geolocal = loadStrings('../assets/Darien_Profundo_excelExport.csv');
=======
<<<<<<< HEAD
  geolocal = loadStrings('../assets/Darien_Profundo_excelExport.csv');
=======
  earthquakes = loadStrings(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'
  );
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);

<<<<<<< HEAD
  for (var i = 1; i < geolocal.length; i++) {
    var data = geolocal[i].split(/,/);
    //console.log(data);
    var lat = data[2];
    var lon = data[3];
    var type = data[8];
=======
<<<<<<< HEAD
  for (var i = 1; i < geolocal.length; i++) {
    var data = geolocal[i].split(/,/);
    //console.log(data);
    var lat = data[2];
    var lon = data[3];
    var type = data[8];
=======
  for (var i = 1; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);
    //console.log(data);
    var lat = data[1];
    var lon = data[2];
    var mag = data[4];
>>>>>>> 0b6853a098ee4032f0ac43463d362f17ce2c649c
>>>>>>> 25b81e88662f97f82e1b2ee527f243a60d3994fb
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    // This addition fixes the case where the longitude is non-zero and
    // points can go off the screen.
    if (x < -width / 2) {
      x += width;
    } else if (x > width / 2) {
      x -= width;
    }
    mag = pow(10, mag);
    mag = sqrt(mag);
    var magmax = sqrt(pow(10, 10));
    var d = map(mag, 0, magmax, 0, 180);
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(x, y, d, d);
  }
}
