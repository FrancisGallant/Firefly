function player (){


	this.element = document.createElement("div");
	this.posX = 320;
	this.posY = 387;
	this.largeur = 80;
	this.hauteur = 93;
	this.element.className("player");
	this.element.style.left = "320px";
	this.element.style.top = "387px";

	document.getElementById("body").appendChild(this.element);


}

player.prototype.tick = function (){


}