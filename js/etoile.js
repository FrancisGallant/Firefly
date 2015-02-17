function Etoile(){
	this.x = Math.random()*720;
	this.y = 0;
	this.speedX = 3;
	this.velocity = 0.3;
	this.isAlive = true;
	this.element = document.createElement("div");
	this.element.className = "etoile";
	this.element.style.position = "absolute";
	this.element.style.left = this.x + "px";
	this.element.style.top = this.y + "px";
	document.getElementById("body").appendChild(this.element);

}

Etoile.prototype.tick = function(){
	this.y += this.speedX;
	this.element.style.top = this.y + "px";

	if(this.y >= 580){
		this.isAlive = false;
	}
}