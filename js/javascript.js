window.onload = init;
var bg;
function init(){
	bg = document.getElementById("body");
	bg.style.backgroundImage = "url('images/firefly-splash.jpg')";
	
	document.onkeyup = function(e){
		if(e.which == 32){
			console.log("space pushed")
			bg.style.backgroundImage = null;
			bg.style.backgroundColor = "black";
		}
	}

}

function worldStep(){

}