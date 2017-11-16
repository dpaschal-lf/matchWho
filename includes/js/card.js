


function Card(options, parent){
	this.images = {};
	this.callbacks = {};
	this.handlers = {};
	this.flipped = false;
	this.noop = function(){
		//console.log('no op');
	}
	this.parent = parent;
	this.defaults = {
		flipDelayTime : 3000
	}
	this.cardData = options;
	// this.callbackMap = { //these are standard callbacks that will be mapped to noop if not found
	// 	'onclick':'click',  
	// 	'onflipstart':'flipStart',
	// 	'onflipend' : 'flipEnd',
	// 	'onfliprevert' : 'flipRever',
	// 	'onmatch' : 'match',
	// 	'onmismatch': 'mismatch',
	// 	'onfirstClick' : 'firstClick',
	// 	'onsecondClick' : 'secondClick'
	// }
	this.images.front = options.front_img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/2000px-Playing_card_spade_A.svg.png';
	this.images.back = options.back_img || 'https://opengameart.org/sites/default/files/card%20back%20blue.png';
	this.processCallbacks = function(options){
		var callbackMap = { //these are standard callbacks that will be mapped to noop if not found
			'onclick':'click',  
			'onflipStart':'flipStart',
			'onflipEnd' : 'flipEnd',
			'onflipRevert' : 'flipRevert',
			'onmatch' : 'match',
			'onmismatch': 'mismatch',
			'onfirstClick' : 'firstClick',
			'onsecondClick' : 'secondClick'
		}
		for(var index in options.callbacks){
			var configCallbackName = index;
			var localCallbackName = callbackMap[index];
			this.callbacks[localCallbackName] = options.callbacks[configCallbackName].bind(this);
			delete callbackMap[index];
		}
		for(var index in callbackMap){
			this.callbacks[callbackMap[index]] = function(){ console.log('no op')};
		}
		// for(var index in this.callbackMap){
		// 	var callbackFrom = this.callbackMap[index];
		// 	var callbackTo = index;
		// 	if(options[callbackTo] !== undefined){
		// 		this.callbacks[callbackFrom] = options.callbacks[callbackTo].bind(this);
		// 	} else {
		// 		this.callbacks[callbackFrom] = function(){
		// 			console.log('no op');
		// 		}
		// 	}
		// }
	}
	this.init = function(options){
		this.processCallbacks(options);
	}
	// this.callbacks.click = options.onclick.bind(this) || this.noop;
	// this.callbacks.flipStart = options.onflipstart.bind(this) || this.noop;
	// this.callbacks.flipEnd = options.onflipend.bind(this) || this.noop;
	// this.callbacks.flipRevert = options.onfliprevert.bind(this) || this.noop;
	this.handlers.click = function(){
		if(!this.flipped){
			this.callbacks.click();
		}
	}
	this.create = function(){
		var container = document.createElement('DIV');
		container.classList.add('card');
		container.addEventListener('click',this.handlers.click.bind(this, "moo"));
		container.classList.add(this.cardData.classes);
		var front = document.createElement('DIV');
		front.classList.add('front');
		front.style.backgroundImage = `url(${this.images.front})`;

		var back = document.createElement('DIV');
		back.classList.add('back');
		back.style.backgroundImage = `url(${this.images.back})`;
		container.appendChild(front);
		container.appendChild(back);
		this.domElement = container;
		return container;
	}

	this.flip = function(){
		this.flipped = true;
		this.callbacks.flipStart();
		this.domElement.classList.add('flipped');
		this.callbacks.flipEnd();
	}
	this.flipBack = function(){
		setTimeout(this.flipBackStartFlip.bind(this),(this.cardData.flipDelayTime || this.defaults.flipDelayTime));
		this.callbacks.flipStart();
	}
	this.flipBackStartFlip = function(){
		this.flipped = false;
		this.domElement.classList.remove('flipped');
		this.callbacks.flipEnd();
		this.parent.clearClicks();
	}
	this.firstClick = function(){
		debugger;
		this.callbacks.firstClick();
	}
	this.secondClick = function(){
		this.callbacks.secondClick();
	}
	this.match = function(){
		this.callbacks.match();
	}
	this.mismatch = function(otherCard){
		this.callbacks.mismatch(otherCard);
	}
	Object.defineProperties(this,{
		ID : {
			get: function(){
				return this.cardData.name;
			},
			set: function(){
				console.log('set called');
			}
		}
	});
	this.init(options);

}