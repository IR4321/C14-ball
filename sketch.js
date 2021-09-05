var Ball = {
  color:"blue",
  x: 20,
  y: 20,
  r: 30,
  xspeed: 0,
  yspeed: 0,



};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(Ball.x,Ball.y,Ball.r);
  Ball.xspeed = 1;
  Ball.x = Ball.x + Ball.xspeed;

}