function player (){


	this.element = document.createElement("div");
	this.posX = 320;
	this.posY = 387;
	this.largeur = 80;
	this.hauteur = 93;
	this.isAlive = true;
	this.element.className = "player";
	this.element.style.position = "absolute";
	this.element.style.left = "320px";
	this.element.style.top = "387px";
	this.maxSpeedX = 10;
	this.speedX = 0;
	this.velocityX = 0.5;


	document.getElementById("body").appendChild(this.element);


}

player.prototype.tick = function (){


	if( leftPushed == true){
		this.speedX -= this.velocityX;

		if (this.speedX <= -this.maxSpeedX)
		{
			this.speedX = -this.maxSpeedX;
		}

	}


	if(leftPushed == false && !(this.speedX==0)){
		if(this.speedX <= 0 ){
			this.speedX += this.velocityX;

			if(this.speedX > 0){
				this.speedX = 0;
			}

		}

	}




	if(rightPushed == true ){
		this.speedX += this.velocityX;
		
		if( this.speedX >= this.maxSpeedX)
		{
			this.speedX = this.maxSpeedX;	
		}
	}



	// this.posX = this.posX + this.speedX;

	console.log(leftPushed);
	this.element.style.left= this.posX + "px";




}