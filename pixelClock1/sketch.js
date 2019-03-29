let a;
let s;
let m;
let wave1;
let wave2;
let col;
let colV;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  a = 0;
  s = second();
  m = minute();
  h = hour();
  wave1 = 0;
  wave2 = 80;
  col = 255;
  let colV=true;
  colorMode(HSB,255);
}

function draw() {
  background(col,20,200);
  translate(width/2,height/2);
  
  noStroke();
  fill(242);
  ellipse(0,0,300,300);
  
  let pS = p5.Vector.fromAngle(radians(s*6-90),140);
  let pM = p5.Vector.fromAngle(radians(m*6-90),90);
  let pH = p5.Vector.fromAngle(radians(h%12*30+m/2-90),40);
  
  for(let i=-175;i<175;i+=10){
    for(let j=-175;j<175;j+=10){
      let distS = dist(i,j,pS.x,pS.y);
      let distM = dist(i,j,pM.x,pM.y);
      let distH = dist(i,j,pH.x,pH.y);
      let r = 3+noise(i,j)*6;
      fill(map(i,-175,175,col-95,col,true),10,235);
      
      if (distS<=30){
        r = map(distS,0,30,12,3,true);
      }
      if (distM<=30){
        r = map(distM,0,30,12,3,true);
      }
      if (distH<=30){
        r = map(distH,0,30,12,3,true);
      }
      
      if (dist(i,j,0,0)>wave1-10 && dist(i,j,0,0)<wave1+10){
        r = map(abs(dist(i,j,0,0)-wave1),0,10,9,3,true);
      }
      if (dist(i,j,0,0)>wave2-10 && dist(i,j,0,0)<wave2+10){
        r = map(abs(dist(i,j,0,0)-wave2),0,10,9,3,true);
      }
      
      if (distS<=30){
        fill(map(i,-175,175,col-95,col,true),map(distS,0,30,120,30,true),235);
      }
      if (distM<=30){
        fill(map(i,-175,175,col-95,col,true),map(distM,0,30,120,30,true),235);
      }
      if (distH<=30){
        fill(map(i,-175,175,col-95,col,true),map(distH,0,30,120,30,true),235);
      }

      ellipse(i,j,r,r);
    }
  }
  
  wave1++;
  wave2++;
  
  if(wave1>160){
    wave1=0;
  }
  if(wave2>160){
    wave2=0;
  }

  
  if(s>=60){
    s=0;
  }
  if(m>=60){
    m=0;
  }
         
  if(s<second()){
    s +=0.1;
  }else if(nfc(s,1)==second()){
    s = second();
  }else if(59<=s<60){
    s += 0.1;
  }
  
  if(m<minute()){
    m +=0.1;
  }else if(nfc(m,1)==minute()){
    m = minute();
  }else if(59<=m<60){
    m +=0.1;
  }
  
  h = hour();
  
  if(col==255){
    colV=true;
  }else if(col==95){
    colV=false;
  }
  
  if (!colV){
    col++;
  }else if(colV){
    col--;
  }

  noFill();
  stroke(col,20,200);
  strokeWeight(100);
  ellipse(0,0,400,400);
  
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