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

bitsx8 = document.getElementById('show32');

bitsx8.addEventListener('click', () =>{

	if(document.getElementById('x86').style.display == 'none'){
		document.getElementById('x86').style.display = 'block';
		document.getElementById('show32').value = 'Ocultar x86';
	}else{
		document.getElementById('x86').style.display = 'none';
		document.getElementById('show32').value = 'Mostrar x86';
	}

});

bitsx6 = document.getElementById('show64');

bitsx6.addEventListener('click', () =>{

	if(document.getElementById('x64').style.display == 'none'){
		document.getElementById('x64').style.display = 'block';
		document.getElementById('show64').value = 'Ocultar x64';
	}else{
		document.getElementById('x64').style.display = 'none';
		document.getElementById('show64').value = 'Mostrar x64';
	}

});

bitsxm = document.getElementById('showrm');

bitsxm.addEventListener('click', () =>{

	if(document.getElementById('xrm').style.display == 'none'){
		document.getElementById('xrm').style.display = 'block';
		document.getElementById('showrm').value = 'Ocultar ARM';
	}else{
		document.getElementById('xrm').style.display = 'none';
		document.getElementById('showrm').value = 'Mostrar ARM';
	}

});

bitsxm6 = document.getElementById('showrm64');

bitsxm6.addEventListener('click', () =>{

	if(document.getElementById('xrm64').style.display == 'none'){
		document.getElementById('xrm64').style.display = 'block';
		document.getElementById('showrm64').value = 'Ocultar ARM64';
	}else{
		document.getElementById('xrm64').style.display = 'none';
		document.getElementById('showrm64').value = 'Mostrar ARM64';
	}

});
