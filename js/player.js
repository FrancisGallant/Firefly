function player (){


	this.element = document.createElement("div");
	this.posX = 320;
	this.posY = 387;
	this.largeur = 80;
	this.hauteur = 93;
	this.element.className("player");
	this.element.style.left = "320px";
	this.element.style.top = "387px";
	this.maxSpeedX = 10;
	this.speedX = 0;
	this.velocityX = 0.5;


	document.getElementById("body").appendChild(this.element);


}

player.prototype.tick = function (){

	if( leftPushed == true && this.speedX >= -this.maxSpeedX ){
		this.speedX -= this.maxSpeedX;


		
	}

	else if(leftPushed == false){

		this.speedX = 0;
	}
	else if(rightPushed == true && this.speedX <= this.maxSpeedX){
		this.speedX += this.maxSpeedX;
	}

	else if(rightPushed == false){
		this.speedX = 0;
	}

	
	left = this.element.offsetLeft;

	this.element.style.left = left + this.speedX + "px";




}