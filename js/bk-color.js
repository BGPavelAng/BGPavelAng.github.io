const body = document.querySelector('body'),
      mTogg = body.querySelector('.modo-but'),
      barra = document.querySelector('.barra_lateral'),
      txtnavb = document.querySelectorAll('.nav-link-color'),
      navb = document.querySelector('.navbar'),
      but_c = document.querySelector('.clk'),
      bigb = document.querySelector('.frm'),
      bigbB = document.querySelector('.frm2'),
      expl = document.querySelector('.baseTx');

mTogg.addEventListener('click', () =>{

	body.classList.toggle("dark");
	barra.classList.toggle("b_dark");
	navb.classList.toggle("navbar_ch");
	navb.classList.toggle("navbar-dark");
	but_c.classList.toggle("redb");
	bigb.classList.toggle('frmB');
	bigbB.classList.toggle('frm2B');
	expl.classList.toggle('baseTxDk');

	for(i = 0; i < 8; i++){

		txtnavb[i].classList.toggle("text-white");
	}

});