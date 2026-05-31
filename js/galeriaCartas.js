import * as s from './selectores_1-00.js';
export function galeriaCartas() {

    const galeriaBtDer= s.Class('galeria-bt-der');
    const galeriaBtIzq= s.Class('galeria-bt-iz');
    const carta= s.Class('cont-img');
    const galeriasPack= s.Class('galeria-pack-img');  
    
    for(let i=0; i<carta.length; i++){
        
        // cargamos la 1ra imagen
        let nroImg;
        let img= s.Class('galeria-pack-img')[i].getElementsByClassName('img-cartas');
        carta[i].style.setProperty('--dirImagenA', `url("${img[0].src}")`);

        // Si terminó la animacion se quita la clase y se restablece dirImagenA
        carta[i].addEventListener('animationend', function(){
            nroImg= parseInt(carta[i].dataset.nroCartas); 
            carta[i].style.setProperty('--dirImagenA', `url("${img[nroImg].src}")`);
            carta[i].classList.remove('animar-giro');
        },false);

        // Botones de la galería
        galeriaBtDer[i].addEventListener('click', function(){            
            //guardamos el nro de la imagen 
            nroImg= parseInt(carta[i].dataset.nroCartas); 
            if(img[nroImg+1]) girarCarta(img, nroImg, carta[i],'normal');           
        }, false);

        galeriaBtIzq[i].addEventListener('click', function(){            
            nroImg= parseInt(carta[i].dataset.nroCartas);
            if(img[nroImg-1]) girarCarta(img, nroImg, carta[i],'reverse');
        }, false);         
    }
}

function girarCarta(img, nroImg, carta, direccion){
    let variableA, variableB;
    if(direccion=='normal')
        variableA='--dirImagenA',
        variableB='--dirImagenB';
    else
        variableB='--dirImagenA',
        variableA='--dirImagenB';

    carta.classList.remove('animar-giro');
    carta.style.animationDirection= direccion;
    void carta.offsetWidth; //obliga a resetear css
    carta.style.setProperty(variableA, `url("${img[nroImg].src}")`);
            
    carta.classList.add('animar-giro');
    direccion=='normal'?nroImg++:nroImg--;
    carta.style.setProperty(variableB, `url("${img[nroImg].src}")`);
            
    carta.dataset.nroCartas= nroImg;
}
