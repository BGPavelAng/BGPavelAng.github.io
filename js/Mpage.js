
const MoviltM = document.getElementById('lic2');

MoviltM.addEventListener("click", () =>{
	document.getElementById('coverM').style.display = 'block';

	let count = 10;
	let countdw = setInterval(function(){
		count--;

	if(count === 9){
		document.getElementById('consolM').style.display = 'block';
	}

	if(count === 8){
		document.getElementById('consolM2').style.display = 'block';
	}

	if(count === 6){
		document.getElementById('consolM3').style.display = 'block';
	}

	if(count === 4){
		document.getElementById('consolM4').style.display = 'block';
	}

	if(count === 3){
		document.getElementById('consolM5').style.display = 'block';
	}

	if(count === 2){
		document.getElementById('consolM6').style.display = 'block';
	}

	if(count === 1){
		document.getElementById('consolM7').style.display = 'block';
	}

	if(count === 0){
		clearInterval(countdw);
		window.open("secur-home.html", '_self');
	}

	}, 1000);

});