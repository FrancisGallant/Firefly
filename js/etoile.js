function Etoile(x,y){
	this.x;
	this.y;
	this.speed = 3;
	this.velocity = 0.3;
	
	this.element = document.createElement("div");
	this.element.className = "etoile";
	this.element.style.left = this.x + "px";
	this.element.style.top = this.y + "px";

	document.getElementById("body").appendChild(this.element);

}

Etoile.prototype.tick = function(){

}