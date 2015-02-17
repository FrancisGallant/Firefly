var bg;
var spriteList = [];
var leftPushed = false;
var rightPushed = false;
var spacePushed = false;

document.onkeydown = function (e) {
    if (e.which == 65)         leftPushed = true; 
    else if (e.which == 68) rightPushed = true;
    else if (e.which == 32) spacePushed = true; 
}

document.onkeyup = function (e) {
    if (e.which == 65)         leftPushed = false;                
    else if (e.which == 68) rightPushed = false;   
    else if (e.which == 32) spacePushed = false;             
}
window.onload = init;

function init(){
	bg = document.getElementById("body");
	bg.style.backgroundImage = "url('images/firefly-splash.jpg')";
	
	document.onkeyup = function(e){
		if(e.which == 32){
			console.log("space pushed")
			bg.style.backgroundImage = null;
			bg.style.backgroundColor = "black";
			spriteList.push(new player());
			console.log(spriteList[0].posX)
			console.log(spriteList[0].posY)
			//creationEtoiles()
			worldStep();
		}
	}

}

function creationEnnemi(){
	//a faire
}

function creationEtoiles(){
		spriteList.push(new Etoile()); // a changer
}


function supprimerElements(){
	for (var i = 0; i < spriteList.length; i++) {
		if(!spriteList[i].isAlive){
			console.log("dans supprimer")
			document.getElementById("body").removeChild(spriteList[i].element);
			spriteList.splice(i,1);
			i--;
		}
	}
}

function worldStep(){
	if(Math.random() > 0.001){
		creationEtoiles();
	}
	for(var i = 0 ; i < spriteList.length ; i++ ){
		spriteList[i].tick();
		//console.log("dans world step")
	}
	supprimerElements();
	window.requestAnimationFrame(worldStep);
}