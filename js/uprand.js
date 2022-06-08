window.addEventListener('scroll', () => {

	let getMov = document.querySelectorAll('.upEPh');

	for(i = 0; i < getMov.length; i++){

		let winH = window.innerHeight;
		let winW = getMov[i].getBoundingClientRect().top;
		let wRep = 150;

		if(winW < winH - wRep){
			getMov[i].classList.add('active');
		}else{
			getMov[i].classList.remove('active');
		}

	}

});