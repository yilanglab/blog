let Bdist;
let Bsize;
let Ballx;
let Bally;
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  Bdist = 30;
  Bsize = 15;
  Ballx=0;
  Bally=0;
}

function draw() {
  background(255,100);
  translate(width/2,height/2);
  // print(Dist);
  
  // let p = p5.Vector.fromAngle(radians(s*6-90), 120);

  Bally = map(rotationX,10,45,-333.5,333.5);
  Ballx = map(rotationY,-20,20,-187.5,187.5);
  if(rotationX<10){
    Bally = -333.5;
  }else if(rotationX>45){
    Bally = 333.5;
  }
  if(rotationY<-20){
    Ballx = -187.5;
  }else if(rotationY>20){
    Ballx = 187.5;
  }
  // text(rotationX,0,-10);
  
  noStroke();
  fill(0,0,255);
  // noFill();
  // ellipse(mouseX-width/2,mouseY-height/2,Bsize);
  
  ellipse(Ballx,Bally,Bsize);
  
  for(let Bi =0;Bi<9;Bi++){
    for(let Bj =0;Bj<17;Bj++){
      let Bx =-150+Bi*(300/8);
      let By =-300+Bj*(600/16);
      // let Dist = dist(mouseX-width/2,mouseY-height/2,Bx,By);
      let Dist = dist(Ballx,Bally,Bx,By);
    ellipse(Bx,By,Bsize);
  if(Dist<Bdist&&Bsize<Dist){
    for(let i =0;i<Dist;i++){
      let x = Ballx-Bx;
      let y = Bally-By;
      let size = (1-sin(map(i/Dist,0,1,0,180)))*((Dist-Bsize)/(Bdist-Bsize))+(1-(Dist-Bsize)/(Bdist-Bsize));
      ellipse(Bx+x*(i/Dist),By+y*(i/Dist),Bsize*size);
    }
  }else if(Dist<Bsize){
    for(let i =0;i<Dist;i++){
      let x = Ballx-Bx;
      let y = Bally-By;
      ellipse(Bx+x*(i/Dist),By+y*(i/Dist),Bsize);
    }
  }
    }
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