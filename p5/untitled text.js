/*
 * @name Flocking
 * @description Demonstration of <a href="http://www.red3d.com/cwr/">Craig Reynolds' "Flocking" behavior</a>.<br>
 * (Rules: Cohesion, Separation, Alignment.)<br>
 * From <a href="http://natureofcode.com">natureofcode.com</a>.
 */
//===============variables
let mice = [];
let boids = [];
//===============setup

function setup() {
  mice = loadImage("assets/1x/mice5.png");
  mice[0] = loadImage('assets/1x/mice1.png');
  mice[1] = loadImage('assets/1x/mice2.png');
  mice[2] = loadImage('assets/1x/mice3.png');
  mice[3] = loadImage('assets/1x/mice4.png');
  mice[4] = loadImage('assets/1x/mice5.png');
  mice[5] = loadImage('assets/1x/mice4.png');
  mice[6] = loadImage('assets/1x/mice3.png');
  mice[7] = loadImage('assets/1x/mice2.png');

  imageMode(CENTER);
  angleMode(DEGREES);
  createCanvas(720, 400);


  // Add an initial set of boids into the system
  for (let i = 0; i < 50; i++) {
    boids[i] = new Boid(random(width), random(height));
  }
}
//================end setup
//================draw start
function draw() {
  background(51);
  // Run all the boids
  for (let i = 0; i < boids.length; i++) {
    boids[i].run(boids);
  }
}
function Flock() {
  boids[i];
}
// Boid class
// Methods for Separation, Cohesion, Alignment added
//================boid class
class Boid {
  //=============attributes
  constructor(x, y) {

    this.acceleration = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.position = createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 3; // Maximum speed
    this.maxforce = 0.005; // Maximum steering force
  }
  //====================drive
  run(boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
  }

  // Forces go into acceleration
  applyForce(force) {
    this.acceleration.add(force);
  }

  // We accumulate a new acceleration each time based on three rules
  //=================flock
  flock(boids) {
    let sep = this.separate(boids); // Separation
    let ali = this.align(boids); // Alignment
    let coh = this.cohesion(boids); // Cohesion
    // Arbitrarily weight these forces
    sep.mult(5.0);
    ali.mult(0.05);
    coh.mult(0);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  // Method to update location
  //===============method
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset acceleration to 0 each cycle
    this.acceleration.mult(1);
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek(target) {
    let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = p5.Vector.sub(target, this.velocity);

    steer.limit(this.maxforce); // Limit to maximum steering force

return steer;
  }

  //===============display
  render(boids) {
  let theta = this.velocity.heading() + radians(90);
    
    //==========================newcode
    this.miceNum = 0;
    this.timer = 0;
    this.maxTimer = (1, 10);
    
      push();
    // animating the mices
    if (this.velocity > 0) map(this.maxTimer * -1 === this.velocity.mag());
    if (this.velocity < 0) map(this.maxTimer === this.velocity.mag());
    translate(this.position.x, this.position.y);
    rotate(theta);
    image(mice, this.position.x, this.position.y);
    this.timer++;


    if (this.timer > this.maxTimer) {
      this.miceNum = this.miceNum + 1;
      this.timer = 0;

    }


    //mice reset
    if (this.miceNum > mice.length - 1) {
      this.miceNum = 0;
    }
    //==========================end newcode

    //this.pos = createVector(width - 50, height - 50);
    //this.vel = createVector(random(-6, 6), random(-6, 6));
    // push();
    // translate(this.position.x, this.position.y);
    // rotate(theta);
    //image(mice[this.miceNum], this.position.x, this.position.y);

    pop();

    // fill(127, 127);
    // stroke(200);
    // ellipse(this.position.x, this.position.y, 16, 16);

  }

  // Wraparound
  borders() {
    if (this.position.x < -170) this.position.x = width + 170;
    if (this.position.y < -170) this.position.y = height + 170;
    if (this.position.x > width + 170) this.position.x = -170;
    if (this.position.y > height + 170) this.position.y = -170;
  }

  //================ Separation
  //================ Method checks for nearby boids and steers away
  separate(boids) {
    let desiredseparation = 150.0;
    let steer = createVector(0, 0);
    let count = 0;
    //===============For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      //===================== If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        let diff = p5.Vector.sub(this.position, boids[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        steer.add(diff);
        count++; // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  align(boids) {
    let neighbordist = 20;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  // Cohesion
  // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
  cohesion(boids) {
    let neighbordist = 80;
    let sum = createVector(0, 0); // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].position); // Add location
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum); // Steer towards the location
    } else {
      return createVector(0, 0);
    }
  }
}


//==============end class boid