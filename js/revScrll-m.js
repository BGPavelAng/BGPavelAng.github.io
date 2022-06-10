window.addEventListener('scroll', () => {

	let revCir = document.querySelectorAll('.road-m');
	let revM = document.querySelectorAll('.dat-sec-M');

	for(i = 0; i < revCir.length; i++){

		let HeiM = window.innerHeight;
		let TopM = revCir[i].getBoundingClientRect().top;
		let PoinM = 150;

		if(TopM < HeiM - PoinM){
			revCir[i].classList.add('active');
		}else{
			revCir[i].classList.remove('active');
		}

	}

	for(i = 0; i < revM.length; i++){

		let HeiMm = window.innerHeight;
		let TopMm = revM[i].getBoundingClientRect().top;
		let PoinMm = 150;

		if(TopMm < HeiMm - PoinMm){
			revM[i].classList.add('active');
		}else{
			revM[i].classList.remove('active');
		}

	}
});
