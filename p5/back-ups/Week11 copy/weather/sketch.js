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

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61773,us&units=imperial&';
  var myIDString = 'appid=eabe9649b044e9f629d7b27742e5948b'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}

function gotData(data) {
  weather = data;
  console.log(data);
  ws = weather.wind.speed;
  temperature = weather.main.temp; // for debugging purposes, print out the JSON data when we get it.
}


function draw() {
  background(135, 157, 207);
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      fill(0);
      textSize(20);
      textAlign(CENTER);
      text("Weather in Sibley", width / 2, 30);
      textSize(12);
      textAlign(LEFT);
      text("The temperature is " + weather.main.temp, 20, 50);
      text("The humidity is " + weather.main.humidity, 20, 70);
      text("The wind speed is " + weather.wind.speed, 20, 90);

      image(cloud, x, 100);
      x = x + ws / 10;
      if (x > width) x = -205;

      //image(therm1, width - 70, 25);

      noStroke();
      fill(255, 0, 0);
      var tmp;
      tmp = map(temperature, 10, 110, height - 325, height - 48);
      ellipse(width - 49, height - 49, 30, 30);

      rect(width - 57, height - 48, 15, -tmp);

      fill(255);
      ellipse(width - 53, height - 52, 10, 10);
      image(myTherm, width - 94, 25);
      rect(width - 55, 42, 3,310);

      // parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY);
}
