window.addEventListener('scroll', () => {
	
	let scV = document.querySelectorAll('.upVlnh');

	for(i = 0; i < scV.length; i++){

		let vLH = window.innerHeight;
		let vLW = scV[i].getBoundingClientRect().top;
		let vLP = 50;

		if(vLW < vLH - vLP){
			scV[i].classList.add('active');
		}
	}
});
