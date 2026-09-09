class verificarCampo{
	constructor(campo, nombreCampo){
		this.campo = campo;
		this.nombreCampo = nombreCampo;
	}
	campoVacio(){ 
        if(this.campo.value.trim() === ''){
            return `<strong>·</strong> El campo \"${this.nombreCampo}\" está vacío.<br>`;
        }
        return '';
    }
    normalizar() {
        this.campo.value = this.campo.value.trim().toLowerCase();
    }
    formatoEmail(){
        let mje = '';
        mje= this.campoVacio();
        if(mje !== '')return mje;
        else{
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!regexEmail.test(this.campo.value)){
                return mje= "<strong>·</strong> El formato de \""+ this.nombreCampo +"\" no es correcto.<br>";
            }
            this.normalizar();
            return '';
        }
    }
    formatoClave(){
        let mje = '';
        mje = this.campoVacio();
        if(mje != ''){
            const regexClave = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;    
            if(!regexClave.test(this.campo.value)){
                return `${mje}<strong>·</strong> La clave debe tener 8 dígitos alfanumericos, con alguna mayuscula.<br>`;
            }
        }
        return mje;
    }
}
class verificarConfirmacionClave extends verificarCampo{
    constructor(campo, campo2){
        super(campo, "Confirmar clave"); //clase madre, para que herede el constructor de la clase padre
        this.campo2 = campo2;
	}
    verificarClaves(){
        let mje = ''; 
        mje = this.formatoClave();
        if(this.campo.value !== this.campo2.value){
            return `${mje}<strong>·</strong> La claves son diferentes.<br>`;
        }
        return mje;
    }
}

function mostrarMensaje(evt, campos){ 
    activarBotonesModal('leyenda'); 
    let mensaje='';
    for (const mjeVerificacion of campos) {
        mensaje += mjeVerificacion;
    }
    if(mensaje != ''){
        evt.preventDefault();
        activarModal();
        Id('texto-modal').innerHTML=mensaje;
        return true;
    }
    return false;
}
function confirmarModal(consulta, formulario, objetoBandera, boton){
    activarBotonesModal('confirmacion');
    const btnAceptar= Id('aceptar-modal');
	const btnCancelar= Id('cancelar-modal');
    const txtModal= Id('texto-modal');

    activarModal();
    txtModal.innerHTML=consulta;

    btnAceptar.onclick = function(){ //Se usa onClick para que sobre escriba la función en vez de agregarla, como haria eddEventLstener
        objetoBandera.confirmado= true;
        quitarModal();
        formulario.requestSubmit(boton); // Disparamos el envío del formulario, aclarando el botón accionado
    }

    btnCancelar.onclick = function(){
        objetoBandera.confirmado= false;        
        quitarModal();
        activarBotonesModal('desactivado');
    }
}