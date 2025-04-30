addEventListener('load',inicio,false);
var reloj;
let estadoAnimacion=true;
let margenCirculito=1;
let posicionAnterior=0;
let tamañoCirculo=1;

function inicio() {
	const segundos=1000;
	reloj=setInterval(animar,3000);
	
	const medidaBloque=((document.getElementById('cabecera').offsetWidth)/2)-10;	
	const bloques= document.getElementsByClassName('bloque');
	bloques[0].style='width: '+ medidaBloque +'px;';
	
	
	window.addEventListener('scroll',miScroll,false);
}
function animar(){

	let clase=document.getElementsByClassName('barra-progreso');
	for(let x=1; x<clase.length; x++){
		
		if(estadoAnimacion){
			clase[x].style='animation-name:barra'+(x+1)+'Arriba; animation-play-state: running;';
		}
		else{ 
			clase[x].style='animation-play-state: paused;animation-name:none;';
		}
	}
	if(estadoAnimacion){estadoAnimacion=false;}
	else{estadoAnimacion=true;} 
}
function miScroll(){
	const puntos=document.getElementById('puntos');
	if(margenCirculito<100 && margenCirculito>-100){
		if(scrollY>posicionAnterior){ margenCirculito+=3;}
		else{ margenCirculito-=5;}
		puntos.style='transform:translateX('+margenCirculito+'px);';
	}	
	const circulo=document.getElementById('circulo');
	if(tamañoCirculo<1.4 && tamañoCirculo>.5){
		if(scrollY>posicionAnterior){ tamañoCirculo+=.05;}
		else{ tamañoCirculo-=.05;}
		circulo.style='transform:scale('+tamañoCirculo+');';
	}
	posicionAnterior=scrollY;
}