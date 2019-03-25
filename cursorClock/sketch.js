let busy;
let mouse;
let a = 0;
let s;

function preload(){
  busy = loadImage('busy.png');
  mouse = loadImage('cursor.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  s = second();
}

function draw() {
  background(255);
  translate(windowWidth/2, windowHeight/2);
	stroke(230);
	noFill();
	ellipse(0,0,300,300);
  
  rotate(hour()%12*30+minute()/2);
  image(mouse,0,0);
  
  push();
  if(second() == 0 || second()%6 == 0){
    if(a<=360){
    		rotate(a);
  			a+=3;
  		}else{
    		a = 3
    		rotate(a);
  		}
  }else{
  		if(a<=360){
    		rotate(a);
 				image(busy,0,0,290,290);
  			a+=3;
  		}else{
    		a = 3
    		rotate(a);
 				image(busy,0,0,290,290);
  		}
  }
  pop();
  
  // push();
  // if(s == 0 || s%6 == 0){
  //   if(s!=second()){
  //    	if(a<=360){
  //   		rotate(a);
  // 			a+=3;
  // 		}else{
  //   		a = 3
  //   		rotate(a);
  // 		}
  //   	s = second();
  // }else{
  //   	rotate(a);
  // 	}
  // }else{
  // 	if(s!=second()){
  //    	if(a<=360){
  //   		rotate(a);
  // image(busy,0,0,290,290);
  // 			a+=3;
  // 		}else{
  //   		a = 3
  //   		rotate(a);
  // image(busy,0,0,290,290);
  // 		}
  //   	s = second();
  // }else{
  //   	rotate(a);
  //   	image(busy,0,0,290,290);
  // 	}
  // }
  // pop();
  
  
  
}

