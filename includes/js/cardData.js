

var cardData = {
	defaultCardCount: 18,
	baseImageFolder: 'includes/images/',
	specialEffects: {
	},
	rounds : [
		{	//start 9th doctor
			onLoad: {
				backgroundImage: 'includes/images/9th_control.jpg'
			},
			cardList: [
				{
					count: 2,
					name: '9th doctor',
					front_img: 'includes/images/9th.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							console.log('in 9th doctor onclick',this)
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('doctor matched!');
							this.parent.loadCards(this.parent.cardInfo.rounds[1]);
							this.parent.changeGameBackground()
						},
						onmismatch: function(otherCard){
							console.log('doctor mismatched');
							if(otherCard.ID === 'Rose Tyler'){
								this.parent.playSound('run.mp3');
							} else {
								this.parent.playSound('fantastic.mp3');
							}
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('1st click...')
						},
						onsecondClick: function(){
							console.log('2nd click...');
							
							this.parent.playSound('fantastic.m4a');
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Rose Tyler',
					front_img: 'includes/images/rose_tyler.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: '9th Sonic',
					front_img: 'includes/images/9th_sonic.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks: {
						onclick: function(stuff){
							console.log('test!',this,"moo", stuff);
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('sonic matched!');
							this.parent.playSound('sonic.m4a');
						},
						onmismatch: function(otherCard){
							console.log('sonic mismatch');
							console.log('mismatched with '+otherCard.ID);
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('first click!')
						},
						onsecondClick: function(){
							console.log('second click!')
						},
					}
				}
			]
		}, //end 9th doctor
		{	//start 10th doctor
			onLoad: {
				backgroundImage: 'includes/images/10th_control.jpg'
			},
			cardList: [
				{
					count: 2,
					name: '10th doctor',
					front_img: 'includes/images/10th.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							console.log('in 10th doctor onclick',this)
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('doctor matched!');
							this.parent.loadCards(this.parent.cardInfo.rounds[2])
						},
						onmismatch: function(otherCard){
							console.log('doctor mismatched');
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('1st click...')
						},
						onsecondClick: function(){
							console.log('2nd click...');
							
							this.parent.playSound('allonsy.m4a');
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Martha Jones',
					front_img: 'includes/images/martha_jones.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Rose Tyler',
					front_img: 'includes/images/rose_tyler2.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: '10th Sonic',
					front_img: 'includes/images/10th_sonic.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks: {
						onclick: function(stuff){
							console.log('test!',this,"moo", stuff);
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('sonic matched!');
						},
						onmismatch: function(otherCard){
							console.log('sonic mismatch');
							console.log('mismatched with '+otherCard.ID);
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('first click!')
						},
						onsecondClick: function(){
							console.log('second click!')
						},
					}
				}
			]
		},  //end 10th doctor
		{	//start 11th doctor
			onLoad: {
				backgroundImage: 'includes/images/11th_control.jpg'
			},
			cardList: [
				{
					count: 2,
					name: '11th Doctor',
					front_img: 'includes/images/11th.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							console.log('in 11th doctor onclick',this)
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('doctor matched!');
							this.parent.playSound('geronimo.mp3');
							this.parent.loadCards(this.parent.cardInfo.rounds[3])
						},
						onmismatch: function(otherCard){
							console.log('doctor mismatched');
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('1st click...')
						},
						onsecondClick: function(){
							console.log('2nd click...');
							
							this.parent.playSound('geronimo2.mp3');
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Amy Pond',
					front_img: 'includes/images/amy_pond.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							if(otherCard.ID === '11th Doctor'){
								this.parent.playSound('raggedy-man.m4a');
							}
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Clara Oswald',
					front_img: 'includes/images/clara_oswald.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
							this.parent.playSound('bigger-on-the-inside.m4a');
						},
						onmismatch: function(otherCard){
							if(otherCard.ID === '11th Doctor'){
								this.parent.playSound('run-you-clever-boy.m4a');
							}
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: '11th Sonic',
					front_img: 'includes/images/11th_sonic.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks: {
						onclick: function(stuff){
							console.log('test!',this,"moo", stuff);
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('sonic matched!');
						},
						onmismatch: function(otherCard){
							console.log('sonic mismatch');
							console.log('mismatched with '+otherCard.ID);
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('first click!')
						},
						onsecondClick: function(){
							console.log('second click!')
						},
					}
				}
			]
		},	//end 11th doctor
		{	//start 12th doctor
			onLoad: {
				backgroundImage: 'includes/images/12th_control.jpg'
			},
			cardList: [
				{
					count: 2,
					name: '12th doctor',
					front_img: 'includes/images/12th.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							console.log('in 10th doctor onclick',this)
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('doctor matched!');
							this.parent.playSound('theme12.mp3');
							//this.parent.loadCards(this.parent.cardInfo.rounds[2])
						},
						onmismatch: function(otherCard){
							console.log('doctor mismatched');
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('1st click...')
						},
						onsecondClick: function(){
							console.log('2nd click...');
							
							this.parent.playSound('kidneys.m4a');
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Bill Potts',
					front_img: 'includes/images/bill_potts.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: 'Clara Oswald',
					front_img: 'includes/images/clara_oswald.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks : {
						onclick: function(stuff){
							this.parent.handleClick(this);
						},
						onmatch: function(){
						},
						onmismatch: function(otherCard){
							this.flipBack();
						},
						onfirstClick: function(){
						},
						onsecondClick: function(){							
						},
						// onflipStart: function(){},
						// onflipEnd: function(){},
						// onflipRevert: function(){}
					}
				},
				{
					count: 2,
					name: '12th Sonic',
					front_img: 'includes/images/12th_sonic.jpg',
					back_img: 'includes/images/cardBack.jpg',
					classes : 'clickable',
					callbacks: {
						onclick: function(stuff){
							console.log('test!',this,"moo", stuff);
							this.parent.handleClick(this);
						},
						onmatch: function(){
							console.log('sonic matched!');
						},
						onmismatch: function(otherCard){
							console.log('sonic mismatch');
							console.log('mismatched with '+otherCard.ID);
							this.flipBack();
						},
						onfirstClick: function(){
							console.log('first click!')
						},
						onsecondClick: function(){
							console.log('second click!')
						},
					}
				}
			]
		} //end 12th doctor
	]
}