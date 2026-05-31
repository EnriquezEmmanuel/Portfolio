import * as s from './selectores_1-00.js';
import{galeriaCartas} from './galeriaCartas.js';
import{barraDesplegable} from './barraDesplegable.js';
import{carrousel} from './carrousel.js';

addEventListener("load", genericos, false);

function genericos() {
    if (s.Query('.cont-img'))  galeriaCartas();
    if (s.Query('.barra-desplegable-v')) barraDesplegable();
    if (s.Query('.carrousel')) carrousel();
} 