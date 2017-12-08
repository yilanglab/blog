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
function setup(){
  createCanvas(windowWidth, 400, WEBGL);
}

function draw(){
  background(200);
  rotateZ(radians(rotationZ));
  rotateX(radians(rotationX));
  rotateY(radians(rotationY));
  box(100, 100, 100);
}
