function CCol(){
	var buttonAC = document.getElementById("butt");
	buttonAC.style.background="black";
}

function CCol2(){
	var buttonAC = document.getElementById("butt");
	buttonAC.style.background="pink";
}

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
    var obj = document.getElementById("butt");
    switch (event.type) {
        case "touchstart":
            obj.src = "buttonDown.png";
            break;
        case "touchend":
            obj.src = "buttonUp.png";
            break;
        
    }
}
