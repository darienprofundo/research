var namesArray = [];
var speed;
var direction;

function preload() {
  mycat = loadImage('assets/bart3.png');
  mydog = loadImage('assets/winston2.png');
  grid = loadImage('assets/grid.png')
}

function setup() {
  angleMode(DEGREES);
  imageMode(CENTER);
  textAlign(CENTER);
  rect(CENTER);


  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '16JZyszhgt9WBbU5reeiti1CNr6is4iAObz7zwMFLqBQ'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  // console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].pet));
  }

}


function draw() {
  background(135, 157, 207);
  //image(grid, 0, 0);

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

}


// my circle class
function Circle(myName,myPet) {  //Circle(myName, myPet)
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-2, 2), random(-2, 2));
  this.name = myName;
  this.pet = myPet;



  this.display = function() {
    if (this.pet == "Cat") {
      fill(60, 0, 255);
      rect(this.pos.x, this.pos.y + 58, 160, 40)
      fill(0);
      textSize(20);
      text(this.name, this.pos.x, this.pos.y + 64);
      image(mycat, this.pos.x, this.pos.y); // put an ellipse here
    } else  {
      fill(255, 0, 60);
      rect(this.pos.x, this.pos.y + 66, 160, 40)
      fill(0);
      textSize(20);
      text(this.name, this.pos.x, this.pos.y + 74);
      image(mydog, this.pos.x, this.pos.y);

    }
  }

  this.drive = function() {
      this.pos.add(this.vel);

    if (this.pos.x > width + 180) this.pos.x = -180;
    if (this.pos.x < -180) this.pos.x = width + 180;
    if (this.pos.y > height + 120) this.pos.y = -120;
    if (this.pos.y < -120) this.pos.y = height + 120;

  }


}

// function winstonDog() {
//   rect(50, 50, 100, 40);
//   textSize(20);
//   fill(0, 0, 0);
//   text(this.name, 50, 50);
//   image(mydog, 50, 50);
//
// }
