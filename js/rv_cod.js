elem = document.getElementById('but');

elem.addEventListener('click', () =>{

	if(document.getElementById('HdSw').style.display == 'none'){
		document.getElementById('HdSw').style.display = 'block';
		document.getElementById('but').value = 'Ocultar';
	}else{
		document.getElementById('HdSw').style.display = 'none';
		document.getElementById('but').value = 'Mostrar';
	}

	
});
