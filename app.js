
document.addEventListener('DOMContentLoaded', () => {

    //seleccionar loe elementos de la interfaz

    const inputEmail = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');

    const validarImputs = (e) => {
        console.log(e.target.value)
    }
    //asignar eventos

    inputEmail.addEventListener('blur', validarImputs);


    asunto.addEventListener('blur', validarImputs);

    mensaje.addEventListener('blur', validarImputs);




})
