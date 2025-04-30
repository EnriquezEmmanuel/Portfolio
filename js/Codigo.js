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
	document.getElementById('txt-area').addEventListener('input',extensionCaracteres,false);
	document.getElementById('btn-enviar').addEventListener('click',evaluarContenido,false);
	document.getElementById('btn-borrar').addEventListener('click',borraCampos,false);
}
function animar(){

	let clase=document.getElementsByClassName('barra-progreso');
	for(let f=1; f<clase.length; f++){
		
		if(estadoAnimacion){
			clase[f].style='animation-name:barra'+(f+1)+'Arriba; animation-play-state: running;';
		}
		else{ 
			clase[f].style='animation-play-state: paused;animation-name:none;';
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

function extensionCaracteres(){
	const contador=document.getElementById('contador-palabras');
	const textArea=document.getElementById('txt-area');
	cantidadCaracteres=textArea.value.length;	
	contador.innerHTML=cantidadCaracteres+'/500';
	
}

function evaluarContenido(evt){
	let textArea=document.getElementById('txt-area').value;
	if(textArea.length==0){
		alert('El campo de Mensaje está vacío.');
		evt.preventDefault();
	}
	if(textArea.length>500){
		alert('El Mensaje es muy extenso.');
		evt.preventDefault();
	}
}

function borraCampos(){
	const grupoBorrado=document.getElementsByClassName('grupo-borrado');
	for(let f=0; f<grupoBorrado.length; f++){
		grupoBorrado[f].value='';
	}
}