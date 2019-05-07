let loc; // 时、分、秒位置数据
let bg=[]; // 圆盘外背景
let netY = [];
let netX = [];
let s;
let m;
let h;
let a;
let img = [];
let record;
let frameN;
function preload(){
  img[0] = loadImage('bg4.png');
  img[1] = loadImage('bg5.png');
}
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(414, 736);
  frameRate(30);
  angleMode(DEGREES);
  imageMode(CENTER);
  loc = new Loc();
  bg = [98,34,255];
  a=0;
  s=second();
  m=minute();
  h=hour();
  record = false;
  frameN = 0;
  
  noStroke();
  for(let i=0;i<40;i++){
    netY[i] = new Net();
    netY[i].dir = true;
    netY[i].lineY = -200+i*10;
  }
  for(let i=0;i<40;i++){
    netX[i] = new Net();
    netX[i].dir = false;
    netX[i].lineX = -200+i*10;
  }
  
}

function draw() {
  background(bg);//圆盘内背景
  translate(width/2,height/2);//原点居中
  
  rotate(m*6);
  translate(0,sin(a*2)*20)
  image(img[1], 0, 0);
  translate(0,-sin(a*2)*20)
  rotate(-m*6);
  
  
  
  noStroke();
  fill(255);
  
	for (let i = netY.length-1; i>=0; i--){
		netY[i].showNet();
		netY[i].updateNet();
	}
	for (let i = netX.length-1; i>=0; i--){
		netX[i].showNet();
		netX[i].updateNet();
	}
  
  rotate(h%12*30+m/2);
  translate(0,sin(a+90)*10)
  image(img[0], 0, 0);
  translate(0,-sin(a+90)*10)
  rotate(-h%12*30-m/2);
  
  strokeWeight(2);
  stroke(255);
  fill(0);
  
  ellipse(loc.secX,loc.secY,10,10);
  
  if(a>=360){
    a=0;
  }
  a+=1;
  if(m<minute()){
    m+=0.1
  }
  h=hour();
  loc.update(); //更新时间数据x,y点位置
  Bg(); //圆盘外背景
  
  strokeWeight(2);
  stroke(0,255,255);
  fill(0,255,255);
  ellipse(0,-180,5);
  ellipse(0,180,5);
  ellipse(-180,0,5);
  ellipse(180,0,5);
  rotate(30);
  ellipse(0,-180,5);
  ellipse(0,180,5);
  ellipse(-180,0,5);
  ellipse(180,0,5);
  rotate(-30);
  rotate(60);
  ellipse(0,-180,5);
  ellipse(0,180,5);
  ellipse(-180,0,5);
  ellipse(180,0,5);
  rotate(-60);
  
  // if(record){
  //   save('myCanvas'+frameN+'.jpg');
  //   // print(frameN);
  //   frameN++;
  // }
}

class Net {
  constructor(){
    this.lineY = 0;
    this.lineX = 0;
    this.dir = true;
    this.radius = 300;
    this.pSize = 2;
    this.den = 60;
    this.pointX = loc.secX;
    this.pointY = loc.secY;
    // this.pointX = mouseX-width/2;
    // this.pointY = mouseY-height/2;
  }
  
  showNet(){
    if(this.dir == true){
      for(let i =0;i<=this.den;i++){
        let mDist = dist(this.pointX,this.pointY,-180+i*(360/this.den),this.lineY);
        let qd = sin(map(mDist,this.radius,0,0,90));;
        if(mDist<this.radius){
          let h = sin(map(this.pointY-this.lineY,this.radius,0,0,180))*60;
          ellipse(-180+i*(360/this.den),this.lineY+h*qd,this.pSize);
        }else{
          ellipse(-180+i*(360/this.den),this.lineY,this.pSize);
        }
      }
    }else if(this.dir == false){
      for(let i =0;i<=this.den;i++){
        let mDist = dist(this.pointX,this.pointY,this.lineX,-180+i*(360/this.den));
        let qd = sin(map(mDist,this.radius,0,0,90));
        if(mDist<this.radius){
          let h = sin(map(this.pointX-this.lineX,this.radius,0,0,180))*60;
          ellipse(this.lineX+h*qd,-180+i*(360/this.den),this.pSize);
        }else{
          ellipse(this.lineX,-180+i*(360/this.den),this.pSize);
        }
      }
    }
  }
  
  updateNet(){
    // this.pointX = mouseX-width/2;
    // this.pointY = mouseY-height/2;
    this.pointX = loc.secX;
    this.pointY = loc.secY;
  }
}

function Loc() {
  this.h = hour();
  this.m = minute();
  this.s = second();
  this.hourX = p5.Vector.fromAngle(radians(this.h%12*30+this.m/2-90), 60).x;
  this.hourY = p5.Vector.fromAngle(radians(this.h%12*30+this.m/2-90), 60).y;
  this.minX = p5.Vector.fromAngle(radians(this.m*6-90), 90).x;
  this.minY = p5.Vector.fromAngle(radians(this.m*6-90), 90).y;
  this.secX = p5.Vector.fromAngle(radians(this.s*6-90), 150).x;
  this.secY = p5.Vector.fromAngle(radians(this.s*6-90), 150).y;
  //调用以角度和与原点距离计算位置的函数，实现时分秒的位置计算：
  //p5.Vector.fromAngle(角度，与原点的距离)
  this.update = function(){ 
    this.h = hour();
    this.m = minute();
    if(this.s >= 60){this.s = 0;}
    this.s +=1/30;
    // this.s = second();
    this.hourX = p5.Vector.fromAngle(radians(this.h%12*30+this.m/2-90), 60).x;
    this.hourY = p5.Vector.fromAngle(radians(this.h%12*30+this.m/2-90), 60).y;
    this.minX = p5.Vector.fromAngle(radians(this.m*6-90), 90).x;
    this.minY = p5.Vector.fromAngle(radians(this.m*6-90), 90).y;
    this.secX = p5.Vector.fromAngle(radians(this.s*6-90), 150).x;
    this.secY = p5.Vector.fromAngle(radians(this.s*6-90), 150).y;
  }
}

function Bg() {
  noFill();
  strokeWeight(250);
  stroke(bg);
  ellipse(0,0,610,610);
  strokeWeight(1);
}   

function mouseClicked() {
  if(record){
    record = false;
  }else{
    record = true;
  }
}