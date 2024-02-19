
const tml = document.getElementById('clic');

tml.addEventListener("click", () =>{
	document.getElementById('cover').style.display = 'block';

	let count = 6;
	let countdw = setInterval(function(){
		count--;

	if(count === 6){
		document.getElementById('consol').style.display = 'block';
	}

	if(count === 5){
		document.getElementById('consol2').style.display = 'block';
	}

	if(count === 4){
		document.getElementById('consol3').style.display = 'block';
	}

	if(count === 3){
		document.getElementById('consol4').style.display = 'block';
	}

	if(count === 2){
		document.getElementById('consol5').style.display = 'block';
	}

	if(count === 1){
		document.getElementById('consol6').style.display = 'block';
	}

	if(count === 1){
		document.getElementById('consol7').style.display = 'block';
	}

	if(count === 0){
		clearInterval(countdw);
		window.open("secur-home.html", '_self');
	}

	}, 1000);

});
