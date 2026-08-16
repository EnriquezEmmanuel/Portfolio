import * as s from './selectores_1-00.js';
addEventListener('load', porfolio, false);

const contenedorRueda= s.Id('contenedor-svg');
const menuRueda= s.Id('rueda');
let estadoRueda= false;
const leyendaRueda= s.Id('rueda-leyenda');

function porfolio(){
    
   ///////////// menu-rueda /////////////
    let posicionRuedaMenu= parseInt(s.Id('rueda').offsetWidth);
    const menuRuedaInterno= menuRueda.contentDocument;
    const iconos= menuRuedaInterno.getElementsByClassName('iconos');

    window.addEventListener('contextmenu', function(e){
        if(!estadoRueda){
            // let bodyWidth= parseInt(this.offsetWidth);
            // alert(bodyWidth - posicionRuedaMenu);
            e.preventDefault();
            menuRueda.style.visibility='visible';
           
            menuRuedaInterno.getElementById('icono-inicio').classList.add('iconos');
            menuRuedaInterno.getElementById('icono-linkedin').classList.add('iconos');
            menuRuedaInterno.getElementById('icono-instagram').classList.add('iconos');
            menuRuedaInterno.getElementById('icono-proyectos').classList.add('iconos');
            menuRuedaInterno.getElementById('icono-perfil').classList.add('iconos');
            
            contenedorRueda.style.backgroundColor='#00000080';
            contenedorRueda.style.height='100%';

            leyendaRueda.style.opacity= '1';
            leyendaRueda.style.transition ='1s opacity ease-in';

            menuRueda.offsetWidth;

            estadoRueda= true;

            window.focus();  //Esto es importante para que no se cuelgue el menu contextual. 

            // esto sirve para darle foco a objetos que no se pueden dar
            // s.Id('rueda').tabIndex=0;
            // s.Id('rueda').focus();
        }
    }, false);
    
    window.addEventListener('click', function(){
        if(estadoRueda) quitarMenu(menuRueda, menuRuedaInterno);
    }, false);

    menuRuedaInterno.addEventListener('click', function(){
        if(estadoRueda) quitarMenu(menuRueda, menuRuedaInterno);
    }, false);
}
function quitarMenu(menu, svgInterno){
    menu.style.visibility='hidden';
    svgInterno.getElementById('icono-inicio').classList.remove('iconos');
    svgInterno.getElementById('icono-linkedin').classList.remove('iconos');
    svgInterno.getElementById('icono-instagram').classList.remove('iconos');
    svgInterno.getElementById('icono-proyectos').classList.remove('iconos');
    svgInterno.getElementById('icono-perfil').classList.remove('iconos');
    
    contenedorRueda.style.backgroundColor='#00000000';
    contenedorRueda.style.height='0';

    leyendaRueda.style.opacity= '0';
    leyendaRueda.style.transition= '.1s opacity';
    
    menu.offsetWidth;
    estadoRueda= false;
    window.focus(); //Esto es importante para que no se cuelgue el menu contextual. 
}
