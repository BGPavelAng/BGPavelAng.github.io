window.addEventListener('scroll', () =>{
	
	let movC = document.querySelectorAll('.top-m');

	for(i = 0; i < movC.length; i++){

		let mH = window.innerHeight;
		let mT = movC[i].getBoundingClientRect().top;
		let mR = 50;

		if(mT < mH - mR){
			movC[i].classList.add('active');
		}else{
			movC[i].classList.remove('active');
		}
	}

});