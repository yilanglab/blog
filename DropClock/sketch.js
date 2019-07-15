let ripplesH=[];
let ripplesM=[];
let ripplesS=[];
let s;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // createCanvas(375,667);
  s = second();
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,255);
  translate(width/2,height/2)
  
  noFill();
  
  if(s != second()){
    let p1 = new Ripple();
    ripplesH.push(p1);
    
    let p2 = new Ripple();
    ripplesM.push(p2);
    
    let p3 = new Ripple();
    ripplesS.push(p3);
    
    s = second()
  }
  
  // =========================== HOUR
  strokeWeight(3);
  for (let i = ripplesH.length-1; i>=0; i--){
    ripplesH[i].showH();
    ripplesH[i].updateH();
    if (ripplesH[i].finishedH()){
      ripplesH.splice(i,1);
    }
  }
  // =========================== MINUTE
  strokeWeight(2);
  for (let i = ripplesM.length-1; i>=0; i--){
    ripplesM[i].showM();
    ripplesM[i].updateM();
    if (ripplesM[i].finishedM()){
      ripplesM.splice(i,1);
    }
  }
  // =========================== SECOND
  strokeWeight(1);
  for (let i = ripplesS.length-1; i>=0; i--){
    ripplesS[i].showS();
    ripplesS[i].updateS();
    if (ripplesS[i].finishedS()){
      ripplesS.splice(i,1);
    }
  }
  
  push();
  noFill();
  strokeWeight(300);
  stroke(0,0,255);
  ellipse(0,0,600,600);
  strokeWeight(1);
  stroke(255,100);
  ellipse(0,0,300,300);
  pop();
}

class Ripple {
  
  constructor(){
    let p1 = p5.Vector.fromAngle(radians((hour()%12)*30+(minute()/2)-90), 90);
    this.xH=p1.x;
    this.yH=p1.y;
    this.alphaH=255;
    this.radiusH=1;
    
    let p2 = p5.Vector.fromAngle(radians(minute()*6-90), 115);
    this.xM=p2.x;
    this.yM=p2.y;
    this.alphaM=255;
    this.radiusM=1;
    
    let p3 = p5.Vector.fromAngle(radians(second()*6-90), 140);
    this.xS=p3.x;
    this.yS=p3.y;
    this.alphaS=255;
    this.radiusS=1;
  }
  // =========================== MINUTE
  finishedM(){
    return this.alphaM <0;
  }
  
  updateM(){
    // this.x-=this.vx;
    // this.y-=this.vy;
    this.alphaM -= 1;
    this.radiusM += 1;
  }
  
  showM(){
    stroke(255,this.alphaM);
    ellipse(this.xM,this.yM,this.radiusM,this.radiusM);
  }
  // =========================== HOUR
  finishedH(){
    return this.alphaH <0;
  }
  
  updateH(){
    this.alphaH -= 0.5;
    this.radiusH += 1;
  }
  
  showH(){
    stroke(255,this.alphaH);
    ellipse(this.xH,this.yH,this.radiusH,this.radiusH);
  }
  // =========================== SECOND
  finishedS(){
    return this.alphaS <0;
  }
  
  updateS(){
    this.alphaS -= 2;
    this.radiusS += 1;
  }
  
  showS(){
    stroke(255,this.alphaS);
    ellipse(this.xS,this.yS,this.radiusS,this.radiusS);
    
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