import * as s from './selectores_1-00.js';



const detector = window.matchMedia("(width>800px), ((width>800px) and (orientation: landscape))");
export function accionesVisuales(){
	for(let i=0; i<s.Class('simbolo-desplegar').length; i++){
		s.Class('simbolo-desplegar')[i].addEventListener('click',function(){
			// const label=this.parentNode;
			const contenedor=this.parentNode;
			despliegue(this,contenedor);
		},false);
	}
	// 1. Ejecutar la consulta de inmediato al cargar la página
	comprobarEstado();

	// 2. Dejar el escucha activo para que reaccione si el usuario estira o encoge la pantalla
	detector.addEventListener("change", comprobarEstado);
}
function comprobarEstado() {
	const elemento= s.Class('simbolo-desplegar');
	 // .matches consulta el estado actual (devuelve true o false)
	 if (detector.matches) {
		   for(let i=0; i<s.Class('simbolo-desplegar').length; i++){
			elemento[i].dataset.desplegable="inactivo";
			const contenedor=elemento[i].parentNode;
			despliegue(elemento[i], contenedor);
		}
	 }
	else {
	   for(let i=0; i<s.Class('simbolo-desplegar').length; i++){
			elemento[i].dataset.desplegable="activo";
			const contenedor=elemento[i].parentNode;
			despliegue(elemento[i], contenedor, true);
		}
	 }
}
function quitarModal(){
	Id('ventana-modal').style='display:none;';
}

function activarModal(){
	Id('ventana-modal').style='display:flex;';
	//Acá deberíamos llamar a activarBotones()
}
function activarBotonesModal(modo){
    const btnAceptar= Id('aceptar-modal');
	const btnCancelar= Id('cancelar-modal');
	const btnCerrar= Id('cerrar-modal');

    switch(modo){
        case 'confirmacion':
            btnAceptar.style.display= 'block';
	        btnCancelar.style.display= 'block';
	        btnCerrar.style.display= 'none';
        break;
        case 'leyenda':
            btnAceptar.style.display= 'none';
	        btnCancelar.style.display= 'none';
	        btnCerrar.style.display= 'block';
        break;
        case 'desactivado':
            btnAceptar.style.display= 'none';
	        btnCancelar.style.display= 'none';
	        btnCerrar.style.display= 'none';
        break;
        case 'total':
            btnAceptar.style.display= 'block';
	        btnCancelar.style.display= 'block';
	        btnCerrar.style.display= 'block';
        break;
        default:
            btnAceptar.style.display= 'block';
	        btnCancelar.style.display= 'block';
	        btnCerrar.style.display= 'block';
    }
}

function despliegue(simbolo, contenedor, consulta = false){
	//alert(elemento);

	if(simbolo.dataset.desplegable == 'activo'){
		if(consulta){
			simbolo.style.display= 'block';
			simbolo.innerHTML = '[ + ]';
			contenedor.classList.remove('descrip-proyecto-desplegado');
			contenedor.classList.add('descrip-proyecto-contraido');
		}
		else{
			if(simbolo.innerHTML == '[ + ]'){
				simbolo.innerHTML = '[ ─ ]';
				contenedor.classList.remove('descrip-proyecto-contraido');
				contenedor.classList.add('descrip-proyecto-desplegado');
			}
			else{
				simbolo.innerHTML = '[ + ]';
				contenedor.classList.remove('descrip-proyecto-desplegado');
				contenedor.classList.add('descrip-proyecto-contraido');
			}
		}
	}
	else{
		simbolo.style.display= 'none';
		contenedor.classList.remove('descrip-proyecto-contraido');
		contenedor.classList.add('descrip-proyecto-desplegado');
	}
}
function mostrarClave(elemento){	
	if(elemento.getAttribute('type') === 'password') elemento.setAttribute('type','text');
	else elemento.setAttribute('type','password');
}