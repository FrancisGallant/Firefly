function Etoile(){
	this.posX = Math.random()*720;
	this.posY = 0;
	this.speedX = 3;
	this.velocity = 0.3;
	this.isAlive = true;
	this.element = document.createElement("div");
	this.element.className = "etoile";
	this.element.style.position = "absolute";
	this.element.style.left = this.posX + "px";
	this.element.style.top = this.posY + "px";
	document.getElementById("body").appendChild(this.element);

}

Etoile.prototype.tick = function(){
	this.posY += this.speedX;
	this.element.style.top = this.posY + "px";

	if(this.posY >= 580){
		this.isAlive = false;
	}
}