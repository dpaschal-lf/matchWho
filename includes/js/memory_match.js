

function MemoryMatch(cardData){
	this.cards = [];
	this.matchedCards = 0;
	this.cardInfo = cardData;
	this.cardsClicked = []; //this will hold cards clicked for a set
	this.init = function(){
		this.loadCards(this.cardInfo.rounds[0]);
		this.addClickSounds();
	}
	this.loadCards = function(nextCards){
		console.log("NEXT: ",nextCards);
		document.getElementById("cardContainer").style.backgroundImage = 'url('+nextCards.onLoad.backgroundImage+')';
		this.removeCards();
		this.createCards(nextCards);
	}
	this.removeCards = function(){
		var container = document.getElementById("cardContainer");
		while (container.firstChild) {
		    container.removeChild(container.firstChild);
		}		
	}
	this.createCards = function(cardRules){
		var container = document.getElementById('cardContainer');

		//change background based on cardRules.onLoad.background
		for(var i=0; i<cardRules.cardList.length; i++){
			for(var count=0; count<cardRules.cardList[i].count; count++){
				var card = new Card(cardRules.cardList[i], this);
				this.cards.push(card);
				container.appendChild(card.create());
			}
		}
	}
	this.addClickSounds = function(){
		var elements = document.querySelectorAll('.clickable');
		var elements = Array.prototype.slice.call(elements).forEach((element)=>{
			element.addEventListener('click',()=>{ 
				this.playSound('switch-22a.wav');
			})
		})
	}
	this.handleClick = function(card){
		console.log('parent click handler called',card);
		var clickTypeArray = ['first','second'];
		if(this.cardsClicked.length<2){
			var clickType = clickTypeArray[this.cardsClicked.length] + 'Click';
			this.cardsClicked.push(card);
			card.flip.call(card);
			card[clickType].call(card);
			if(this.cardsClicked.length===2){
				if(this.cardsClicked[0].ID === this.cardsClicked[1].ID){
					this.handleMatch();
				} else {
					this.handleMismatch();
				}
			}
		}
	}
	this.handleMatch = function(){
		this.cardsClicked.forEach((card)=>{
			card.match.call(card);
		});
		this.clearClicks();
		this.matchedCards+=2;
		this.checkWin();
	}
	this.changeGameBackground = function(background){

	}
	this.checkWin = function(){
		if(this.matchedCards === this.cards.length){
			alert('win!');
		}
	}
	this.clearClicks = function(){
		this.cardsClicked = [];
	}
	this.handleMismatch = function(){
		this.cardsClicked.forEach((card, index, cardArray)=>{
			card.mismatch.call(card,cardArray[1-index]);
		});
	}
	this.playSound = function(soundFile){
		var sound = new Audio();
		sound.src = 'includes/sounds/'+soundFile;
		sound.play();		
	}
	this.init();
}