
// function setWH(){
// 	var bgW = window.innerWidth+"px";
// 	var bgH = window.innerheight+"px";
// 	alert(bgW,bgH);
// }
// setWH();

document.getElementById("butt").addEventListener("touchstart", touch);
document.getElementById("butt").addEventListener('touchend', touch);
function touch(event) {
    /**兼用 IE 浏览器*/
    var event = event || window.event;
    var acbutton = document.getElementById("butt");
    var num = document.getElementById("num");

    switch (event.type) {
        case "touchstart":
        	play();
            acbutton.src = "buttonDown.png";
            num.style.display = "none";
    		var timer = setTimeout(function(){
    			var num = document.getElementById("num");
    			num.style.display = "block";
    		},200);
            break;
        case "touchend":
            acbutton.src = "buttonUp.png";
            break;
        
    }
}

function play(){
	document.getElementById("audio").currentTime = 0;
    document.getElementById("audio").play();
}