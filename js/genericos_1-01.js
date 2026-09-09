import * as s from './selectores_1-00.js';
import{barraDesplegable} from './barraDesplegable.js';
import{accionesVisuales} from './accionesVisuales.js';

addEventListener("load", genericos, false);

function genericos() {
    if (s.Query('.barra-desplegable-v')) barraDesplegable();
    if(s.Query('.simbolo-desplegar')) accionesVisuales();
} 