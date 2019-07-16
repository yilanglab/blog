
// function setWH(){
// 	var bgW = window.innerWidth+"px";
// 	var bgH = window.innerheight+"px";
// 	alert(bgW,bgH);
// }
// setWH();

var sound = new Howl({
    src: ['AC.mp3']
  });

document.getElementById("butt").addEventListener("touchstart", touch);
document.getElementById("butt").addEventListener('touchmove', touch);
document.getElementById("butt").addEventListener('touchend', touch);
function touch(event) {
    /**兼用 IE 浏览器*/
    var event = event || window.event;
    var acbutton = document.getElementById("butt");

    switch (event.type) {
        case "touchstart":
        	sound.stop();
            sound.play();
            acbutton.src = "buttonDown.png";
            var num = document.getElementById("num");
            num.style.display = "none";
    		var timer = setTimeout(function(){
    			var num = document.getElementById("num");
    			num.style.display = "block";
    		},200);
            break;
        case "touchend":
            acbutton.src = "buttonUp.png";
            break;
        case "touchmove":
            acbutton.src = "buttonDown.png";
            break;
    }
}