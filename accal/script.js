
// function setWH(){
// 	var bgW = window.innerWidth+"px";
// 	var bgH = window.innerheight+"px";
// 	alert(bgW,bgH);
// }
// setWH();

var guiling = new Howl({
    src: ['audio/AC.mp3']
  });
var clicksound = new Howl({
    src: ['audio/click.mp3']
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
        	guiling.stop();
            guiling.play();
            clicksound.play();
            acbutton.src = "img/buttonDown1.png";
            var num = document.getElementById("num");
            num.style.display = "none";
    		var timer = setTimeout(function(){
    			var num = document.getElementById("num");
    			num.style.display = "block";
    		},200);
            break;
        case "touchend":
            acbutton.src = "img/buttonUp1.png";
            break;
        case "touchmove":
            acbutton.src = "img/buttonDown1.png";
            break;
    }
}