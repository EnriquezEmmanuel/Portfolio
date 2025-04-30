	
	const alto = window.innerHeight;
	const tercio1= alto/3;
	const tercio2= tercio1*2;
	let ultimoScroll=0;
	let posicionActual=0;
	let pos=new Array(3);
	let contador=110;
addEventListener('load',inicio,false);

	

function inicio() {
	
	ultimoScroll=scrollY;
	pos[0]=document.getElementById('cabecera');
	pos[1]=document.getElementById('aptitudes');
	pos[2]=document.getElementById('proyectos');
	const medidaBloque=((document.getElementById('cabecera').offsetWidth)/2)-10;
	
	const bloques= document.getElementsByClassName('bloque');
	bloques[0].style='width: '+ medidaBloque +'px;';
	localizacionAptitudes=document.getElementById('aptitudes').getBoundingClientRect().top;
	//alert(document.getElementById('aptitudes').getBoundingClientRect().top);


	
	window.addEventListener('scroll',miScroll,false);
}
function miScroll(){
	let info=document.getElementById('plantilla-temporal2');

	info.innerHTML=
	'(antes) scrollY: '+ scrollY + 
	'<br>Ultimo scroll:'+ ultimoScroll+
	'<br>Posicion actual: '+ posicionActual+
	'<br>Posicion de etiqueta: '+ pos[1].getBoundingClientRect().top+
	'<br> treccio 1: '+ tercio1
	;
	
	/*if(scrollY>ultimoScroll && scrollY<pos[1].getBoundingClientRect().top){
		pos[1].scrollIntoView({ behavior: 'smooth' });
	}*/

	
	if(scrollY>ultimoScroll){
		if(scrollY<pos[1].getBoundingClientRect().top){
			pos[1].scrollIntoView({ behavior: 'smooth' });
			ultimoScroll=pos[1].getBoundingClientRect().top+300;
		}
		else{ 
			pos[2].scrollIntoView({ behavior: 'smooth' }); 
			ultimoScroll=pos[2].getBoundingClientRect().top;
		}
	}
	else{
		if(scrollY<pos[2].getBoundingClientRect().top &&
			scrollY>pos[1].getBoundingClientRect().top ){
			pos[1].scrollIntoView({ behavior: 'smooth' });
			ultimoScroll=pos[1].getBoundingClientRect().top-300;
		}
		else{ 
			pos[0].scrollIntoView({ behavior: 'smooth' }); 
			ultimoScroll=pos[0].getBoundingClientRect().top;
		}
	}

	/*	
	if(scrollY>ultimoScroll){
		if(contador>100){

			if(posicionActual<2){
				posicionActual++;
				pos[posicionActual].scrollIntoView({ behavior: 'smooth' });
			}
			contador=0;
		}
		else{ contador++; }
	}*/

		/*
		else{
			if(scrollY<ultimoScroll){
				if(posicionActual>0){
					posicionActual--;
				}
			}
		}
		*/
		//pos[posicionActual].scrollIntoView({ behavior: 'smooth' });
		//scrollY=pos[1];
		//ultimoScroll=pos[posicionActual];
		//ultimoScroll=scrollY;
		//contador=0;

	
	info.innerHTML+=
	'<br>(después) scrollY: '+ scrollY+ 
	'<br>Ultimo scroll:'+ ultimoScroll+
	'<br>Posicion actual: '+ posicionActual
	;


  
}