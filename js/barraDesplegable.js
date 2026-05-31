import * as s from './selectores_1-00.js';
export function barraDesplegable() {
    const barra=s.Class('barra-desplegable-v');
    for(let i=0; i<barra.length; i++){
        barra[i].addEventListener('click',function(){
            if(this.dataset.desplegable == 'false')
                this.classList.add('barra-desplegable-v-mod'),
                this.dataset.desplegable='true';
            else
                this.classList.remove('barra-desplegable-v-mod'),
                this.dataset.desplegable='false';
        },false);
    }
}