function Ennemi(){
	this.posX = Math.random()*700;
	this.posY = -100;
	this.speedX = 2 ;
	this.isAlive = true;
	this.element = document.createElement("div");
	this.element.className = "ennemi";
	this.element.style.position = "absolute";
	this.element.style.left = this.posX + "px";
	this.element.style.top = this.posY + "px";
	document.getElementById("body").appendChild(this.element);
}

Ennemi.prototype.tick = function(){
	this.posY += this.speedX;
	this.element.style.top = this.posY + "px";

	if(this.posY >= 550){
		this.isAlive = false;
		//temporaire en réalite doit
		//enlever de la vie au joueur
	}
}