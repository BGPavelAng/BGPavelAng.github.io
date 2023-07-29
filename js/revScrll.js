window.addEventListener('scroll', () => {

	let getRev = document.querySelectorAll('.road');
	
	let getRevYnN = document.querySelectorAll('.roadP');


	for(i = 0; i < getRevYnN.length; i++){

		let winHinfo = window.innerHeight;
		let winTinfo = getRevYnN[i].getBoundingClientRect().top;
		let revPinfo = 50;

		if(winTinfo < winHinfo - revPinfo){
			getRevYnN[i].classList.add('active');
		}else{
			getRevYnN[i].classList.remove('active');
		}

	}
	
});

