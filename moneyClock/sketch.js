let yearSalary;
let daySalary;
let daySeconds;
let secSalary;
let secNow;
let frSalary;
let a;
let s;

let ripples=[];

let numFont;

function preload(){
  numFont = loadFont('DINPRO-BLACK.OTF');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // createCanvas(375,667);
  frameRate(30);
  yearSalary = 200000;
	daySalary = int(yearSalary/365);
  daySeconds = 24*60*60;
  secSalary = daySalary/daySeconds;
  frSalary = secSalary/30;
  secNow = hour()*3600+minute()*60+second();
  s = second();
  a = 0;
  textAlign(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width/2,height/2)
  
  noFill();
  strokeWeight(2);
  
  if(s != second()){
		let p = new Ripple();
		ripples.push(p);
		s = second()
	}
  
  for (let i = ripples.length-1; i>=0; i--){
		ripples[i].show();
		ripples[i].update();
		if (ripples[i].finished()){
			ripples.splice(i,1);
		}
	}
  
  noStroke();
  textFont(numFont);
  fill(255,200,0,220);
  textSize(72);
  textAlign(CENTER);
  text('MONEY',0,-96);
  text('CLOCK',0,146);
  textSize(100);
  textAlign(LEFT);
  text(nfc(secSalary*secNow+a,6), -150, -10);
  textAlign(RIGHT);
  text(nfc(secSalary*secNow+a,6),160, 80);
  a+=frSalary;

  push();
  noFill();
  strokeWeight(200);
  stroke(255);
  ellipse(0,0,500,500);
  strokeWeight(1);
  stroke(255,200,0,100);
  ellipse(0,0,300,300);
  pop();
  
}

class Ripple {
  
  constructor(){
    let p = p5.Vector.fromAngle(radians((hour()%12)*30+(minute()/2)-90), 140);
    this.x=p.x;
    this.y=p.y;
    this.alpha=255;
    this.radius=1;
  }
  
  finished(){
		return this.alpha <0;
	}
  
  update(){
		// this.x-=this.vx;
		// this.y-=this.vy;
		this.alpha -= 0.5;
    this.radius += 1;
	}
  
  show(){
    
    stroke(255,200,0,this.alpha);
    ellipse(this.x,this.y,this.radius,this.radius);
  }
}

function touchStarted () {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};