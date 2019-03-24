let particles = [];
let img=[];
let emojiProb = [];
for (let i = 0;i<24;i++){
  emojiProb[i] = [];
}

function preload(){
  img[0] = loadImage('neutral-face.png');
  img[1] = loadImage('one-oclock.png');
  img[2] = loadImage('two-oclock.png');
  img[3] = loadImage('three-oclock.png');
  img[4] = loadImage('four-oclock.png');
  img[5] = loadImage('five-oclock.png');
  img[6] = loadImage('six-oclock.png');
  img[7] = loadImage('seven-oclock.png');
  img[8] = loadImage('eight-oclock.png');
  img[9] = loadImage('nine-oclock.png');
  img[10] = loadImage('ten-oclock.png');
  img[11] = loadImage('eleven-oclock.png');
  img[12] = loadImage('twelve-oclock.png');
  
  img[13] = loadImage('desktop-computer.png');
  img[14] = loadImage('writing-hand.png');
  img[15] = loadImage('hot-beverage.png');
  img[16] = loadImage('speech-balloon.png');
  img[17] = loadImage('sleepy-face.png');
  img[18] = loadImage('sun.png');
  img[19] = loadImage('sleeping-face.png');
  img[20] = loadImage('bed.png');
  img[21] = loadImage('night-with-stars.png');
  img[22] = loadImage('zzz.png');
  img[23] = loadImage('crescent-moon.png');
  img[24] = loadImage('glass-of-milk.png');
  img[25] = loadImage('mobile-phone.png');
  img[26] = loadImage('grinning-face.png');
  img[27] = loadImage('steaming-bowl.png');
  img[28] = loadImage('tangerine.png');
  img[29] = loadImage('red-apple.png');
  img[30] = loadImage('bento-box.png');
  img[31] = loadImage('cat.png');
  img[32] = loadImage('thinking-face.png');
  img[33] = loadImage('hamburger.png');
  img[34] = loadImage('curry-rice.png');
  img[35] = loadImage('tired-face.png');
  img[36] = loadImage('smiling-face-with-smiling-eyes.png');
  img[37] = loadImage('shower.png');
  img[38] = loadImage('sandwich.png');
  img[39] = loadImage('sunrise.png');
  img[40] = loadImage('sunrise-over-mountains.png');
  img[41] = loadImage('thought-balloon.png');
  img[42] = loadImage('sunset.png');
  img[43] = loadImage('dizzy-face.png');
  img[44] = loadImage('headphone.png');
  
  
  emojiProb[0] = [0,12,17,19,20,21,22,23,24,25];
  emojiProb[1] = [1,17,19,20,21,22,22,23,23,41];
  emojiProb[2] = [2,19,20,21,22,22,22,23,23,41];
  emojiProb[3] = [3,19,19,20,22,22,22,23,23,41];
  emojiProb[4] = [4,19,20,21,22,22,22,23,23,41];
  emojiProb[5] = [5,17,19,20,21,22,22,23,41,42];
  emojiProb[6] = [0,6,17,19,20,22,39,40,41,42];
  emojiProb[7] = [0,7,15,18,31,35,38,39,40,42];
  emojiProb[8] = [0,8,15,18,24,31,36,38,38,44];
  emojiProb[9] = [0,0,9,13,14,15,18,25,38,41];
  emojiProb[10] = [0,0,10,13,13,14,14,16,18,41];
  emojiProb[11] = [0,0,11,13,14,16,18,25,35,43];
  emojiProb[12] = [0,12,16,18,26,27,28,30,33,34];
  emojiProb[13] = [0,1,13,14,18,29,31,32,41,44];
  emojiProb[14] = [0,0,2,13,13,14,15,16,17,18];
  emojiProb[15] = [0,0,3,13,13,14,15,16,32,41];
  emojiProb[16] = [0,0,4,13,13,14,16,32,41,43];
  emojiProb[17] = [0,5,13,14,16,25,35,41,42,43];
  emojiProb[18] = [0,6,16,26,27,28,29,30,36,42];
  emojiProb[19] = [0,7,16,28,29,31,36,37,41,42];
  emojiProb[20] = [0,8,13,16,21,31,36,37,41,44];
  emojiProb[21] = [0,9,13,21,23,25,31,36,37,44];
  emojiProb[22] = [0,10,17,21,23,24,25,31,36,44];
  emojiProb[23] = [0,11,17,19,20,21,23,24,25,43];
}


function setup() {
	createCanvas(375, 667);
	s = second();
  background(255);
	textSize(48);
	text('E M O J I', 87, 150);
  text('C L O C K', 84, 555);

  imageMode(CENTER);
  ellipseMode(CENTER);
  
}

function draw() {
  
	// background(255);
  
  noStroke();
  ellipse(width / 2, height / 2,340,340);
  stroke(240);
  ellipse(width / 2, height / 2,320,320);
  // ellipse((width / 2)+v.x, (height / 2)+v.y,20,20);
  
	translate(188,334);
  // tint(255,100);
  // image(img[0], 0, 0,128,128);
  
	if(s != second()){
		let p = new Particle();
		particles.push(p);
    particles[particles.length-1].emoji = int(random(0,10));
    print(emojiProb[hour()][particles[particles.length-1].emoji]);
		s = second()
	}
	
	for (let i = particles.length-1; i>=0; i--){
    // let t = emojiProb[hour()][particles[particles.length-1].emoji]
    // image(img[t], 0, 0,128,128);
		particles[i].show();
		particles[i].update();
		if (particles[i].finished()){
			particles.splice(i,1);
		}
	}
}

class Particle {
	constructor(){
    let p = p5.Vector.fromAngle(radians((hour()%12)*30+(minute()/2)-90), 150);
    let v = p5.Vector.fromAngle(radians((hour()%12)*30+(minute()/2)-90+random(-5,5)), 2);
		this.x = p.x;
		this.y =p.y;
		this.vx = v.x;
		this.vy = v.y;
		this.alpha = 255;
    this.emoji = 0;
	}
	
	finished(){
		// return this.alpha <0;
    return dist(0, 0, this.x, this.y)>=168;
    
	}
	
	update(){
    
		this.x-=this.vx;
		this.y-=this.vy;
		// this.x-=p.x;
		// this.y-=p.y;
		this.alpha -= 2;
	}
	
	show(){

    tint(255,this.alpha);
    // image(img[emojiProb[11][this.emoji]], this.x, this.y,32,32);
    image(img[emojiProb[hour()][this.emoji]], this.x, this.y,32,32);
    
    
    
	}
}