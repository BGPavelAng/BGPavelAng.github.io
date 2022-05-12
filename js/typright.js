const effecto = (m, v) => {

	let text = m.innerHTML;
	m.innerHTML = "";

	let i = 0;

	let timer = setInterval(function(){

		if(i < text.length){
			m.append(text.charAt(i));
			i++;
		}else{
			clearInterval(timer);
		}
	}, v);
}

let vel = 85;
let mov = document.querySelector('.tipogR');
let mov2 = document.querySelector('.tipogR2');
let mov3 = document.querySelector('.tipogR3');
let mov4 = document.querySelector('.tipogR4');
let mov5 = document.querySelector('.tipogUm');
let mov6 = document.querySelector('.tipogUm2');
let mov7 = document.querySelector('.tipogUm3');
let mov8 = document.querySelector('.tipogUm4');
let speed = mov.innerHTML.length * vel + vel;

effecto(mov, vel);
effecto(mov2, vel);
effecto(mov3, vel);
effecto(mov4, vel);
effecto(mov5, vel);
effecto(mov6, vel);
effecto(mov7, vel);
effecto(mov8, vel);