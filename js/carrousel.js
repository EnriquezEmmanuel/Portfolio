import * as s from './selectores_1-00.js';
export function carrousel() { 
    const carrouselBtDer= s.Class('aereos-bt-der');
    const carrouselBtIzq= s.Class('aereos-bt-iz');
    const carrouselContenido= s.Class('carrousel-contenido');
    //let carrouselPosicion= new Array(carrouselContenido.length).fill(0); //rellena todo con 0

    for(let i=0; i< carrouselBtDer.length; i++){

        carrouselBtDer[i].addEventListener('click', function(){ 
            const padre = this.closest('.carrousel'); // Busca el ancestro más cercano con esa clase
            
            if(padre){

                const contenido = padre.querySelector('.carrousel-contenido');
                let anchoPadre= padre.clientWidth;
                //guardamos la posicion en el propio objeto
                let pos= parseInt(contenido.dataset.posicion);
                const topeDesplazamiento= contenido.scrollWidth - anchoPadre;
                
                pos - 150 > -topeDesplazamiento ?  
                    pos-=150 : pos= -topeDesplazamiento;

                contenido.dataset.posicion= pos;
                desplazarCarrousel(contenido, pos);
            }
        }, false);
    }

    for(let i=0; i< carrouselBtIzq.length; i++){
        carrouselBtIzq[i].addEventListener('click', function(){
            
             const padre = this.closest('.carrousel'); // Busca el ancestro más cercano con esa clase
            
            if (padre) {
              const contenido = padre.querySelector(".carrousel-contenido");
              let pos = parseInt(contenido.dataset.posicion);

              pos + 150 <= 0 ? (pos += 150) : (pos = 0);

              contenido.dataset.posicion = pos;
              desplazarCarrousel(contenido, pos);
            }
        }, false);
    }

    window.addEventListener('resize', function(){
        for(let i=0; i<carrouselContenido.length; i++){
            carrouselContenido[i].dataset.posicion= 0;
            desplazarCarrousel(carrouselContenido[i], 0);
        }
    }, false);

   
    let ampliarCarrousel= true;
    let banderaCarrousel= new Array(carrouselContenido.length).fill(true);
    const valInicialContenido= new Array(carrouselContenido.length);

    for(let i=0; i<carrouselContenido.length; i++){
        carrouselContenido[i].addEventListener('click', function(){
            let pos= carrouselContenido[i].dataset.posicion;
            let posTemporal= carrouselContenido[i].dataset.posTemporal;

            if(banderaCarrousel[i]){
                banderaCarrousel[i]= false;
                valInicialContenido[i]= carrouselContenido[i].scrollHeight;
            }
            if(ampliarCarrousel){
                posTemporal= pos;
                dimensionarImagen(this);
                ampliarCarrousel= false;
            }
            else{
                dimensionarImagen(this, valInicialContenido[i]);
                pos= posTemporal;
                desplazarCarrousel(carrouselContenido[i], parseInt(pos));
                ampliarCarrousel= true;
            }
            
        }, false);
    }
}
function desplazarCarrousel(contenido, posicion){
    contenido.style.transform=`translateX( ${posicion}px )`;
}
function dimensionarImagen(){
    if(!arguments[1])        
        arguments[0].style.height= '80vh';
    else {arguments[0].style.height= `${arguments[1]}px`;}
} 
function validarPadre(elemento, padre){
    return ;
}