var bg;
var spriteList = [];
var leftPushed = false;
var rightPushed = false;
var spacePushed = false;
var isStarted = false;
var totalVie = 3;

document.onkeydown = function (e) {
    if (e.which == 65)         leftPushed = true; 
    else if (e.which == 68) rightPushed = true;
    else if (e.which == 32) spacePushed = true; 
}

// document.onkeyup = function (e) {
//     if (e.which == 65)         leftPushed = false;                
//     else if (e.which == 68) rightPushed = false;   
//     else if (e.which == 32) spacePushed = false;             
// }

window.onload = init;

function init(){
	bg = document.getElementById("body");
	bg.style.backgroundImage = "url('images/firefly-splash.jpg')";
	
	document.onkeyup = function(e){
		if (e.which == 65)         leftPushed = false;                
    	else if (e.which == 68) rightPushed = false;
		else if(e.which == 32)
		{	
			if(!isStarted){
				spacePushed = false;
				console.log("space pushed")
				bg.style.backgroundImage = null;
				bg.style.backgroundColor = "black";
				spriteList.push(new player());
				console.log(spriteList[0].posX)
				console.log(spriteList[0].posY)
				worldStep();
			}
			else{
				//powpow ici!!
			}
		}
	}

}

function creationEnnemi(){
	spriteList.push(new Ennemi());
}

function creationEtoiles(){
	spriteList.push(new Etoile());
}


function supprimerElements(){
	for (var i = 0; i < spriteList.length; i++) {
		if(!spriteList[i].isAlive){
			//console.log("dans supprimer")
			document.getElementById("body").removeChild(spriteList[i].element);
			spriteList.splice(i,1);
			i--;
		}
	}
}

function worldStep(){
	if(Math.random() < 0.1){
		creationEtoiles();
	}
	if(Math.random() < 0.01){
		creationEnnemi();
	}
	
	for(var i = 0 ; i < spriteList.length ; i++ ){
		spriteList[i].tick();
	}
	supprimerElements();
	window.requestAnimationFrame(worldStep);
}