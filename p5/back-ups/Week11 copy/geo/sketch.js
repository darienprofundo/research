var locationData;

function preload(){
    locationData =  getCurrentPosition();
}

function setup() {
	createCanvas(500, 500) ;

}

function draw() {
	fill(0) ;
	textSize(12) ;
	text("hello", 20, 20) ;
    text(locationData.latitude, 40, 40) ;
    text(locationData.longitude, 40, 60) ;
    text(locationData.accuracy, 40, 80) ;
    text(locationData.altitude, 40, 100) ;
    text(locationData.altitudeAccuracy, 40, 120) ;
    text(locationData.heading, 40, 140) ;
    text(locationData.speed, 40, 160) ;

}
