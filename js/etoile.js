function Etoile(x,y){
	this.x = Math.random()*500;
	this.y = 0;
	this.speed = 3;
	this.velocity = 0.3;
	this.isAlive = true;
	this.element = document.createElement("div");
	this.element.className = "etoile";
	this.element.style.left = this.x + "px";
	this.element.style.top = this.y + "px";

	document.getElementById("body").appendChild(this.element);

}

Etoile.prototype.tick = function(){
	this.y += this.speed;
}