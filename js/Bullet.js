function Bullet(x,y){
	this.posX = x;
	this.posY = y;
	this.element = document.createElement("div");
	this.element.className = "bullet";
	this.element.style.position = "absolute";
	this.element.style.left = this.posX + "px";
	this.element.style.top = this.posY + "px";
	document.getElementById("body").appendChild(this.element);

}