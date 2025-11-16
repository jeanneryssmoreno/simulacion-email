
document.addEventListener('DOMContentLoaded', () => {

    //seleccionar loe elementos de la interfaz

    const inputEmail = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');

    const validarImputs = (e) => {

        if (e.target.value.trim() === '') {
            console.log('esta vacio mama');

        } else {
            console.log('si hay');
        }
    }

    //asignar eventos

    inputEmail.addEventListener('blur', validarImputs);
    asunto.addEventListener('blur', validarImputs);
    mensaje.addEventListener('blur', validarImputs);

})
