// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background(255,133,144);
//
// }
//
// function draw() {
//
// }
//
// function touchMoved(){
// 	ellipse(mouseX,mouseY,50,50);
// 	return false;
// }

var value = 0;
var value2 = 0;

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
  fill(value2);
  rect(50, 50, 50, 50);
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
function deviceMoved() {
  value2 = value2 + 5;
  if (value2 > 255) {
    value2 = 0;
  }
}
