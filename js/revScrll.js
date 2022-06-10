window.addEventListener('scroll', () => {

	let getRev = document.querySelectorAll('.road');
	let getRevInfo = document.querySelectorAll('.dat-sec');
	let getRevYnN = document.querySelectorAll('.roadP');

	for(i = 0; i < getRev.length; i++){

		let winH = window.innerHeight;
		let winT = getRev[i].getBoundingClientRect().top;
		let revP = 50;

		if(winT < winH - revP){
			getRev[i].classList.add('active');
		}else{
			getRev[i].classList.remove('active');
		}

	}

	for(i = 0; i < getRevInfo.length; i++){

		let winHinfo = window.innerHeight;
		let winTinfo = getRevInfo[i].getBoundingClientRect().top;
		let revPinfo = 50;

		if(winTinfo < winHinfo - revPinfo){
			getRevInfo[i].classList.add('active');
		}else{
			getRevInfo[i].classList.remove('active');
		}

	}

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

