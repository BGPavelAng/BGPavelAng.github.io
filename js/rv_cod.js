elem = document.getElementById('but');

elem.addEventListener('click', () =>{

	if(document.getElementById('HdSw').style.display == 'none'){
		document.getElementById('HdSw').style.display = 'block';
	}else{
		document.getElementById('HdSw').style.display = 'none';
	}

	
});