document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // --- FUNCIONES (Declaradas antes de ser usadas) ---

    const mostrarAlerts = (referencia) => {
        // Verifica si ya existe una alerta-error en la referencia
        const existeAlerta = referencia.querySelector('.alerta-error');

        // Si NO existe una alerta, la creamos
        if (!existeAlerta) {
            const error = document.createElement('P');
            error.textContent = 'Rellena todos los campos';
            error.classList.add('alerta-error');

            // Inyectar el error
            referencia.appendChild(error);
        }
    }

    const validarImputs = (e) => {
        // e.target.parentElement es el contenedor donde inyectaremos la alerta
        const referenciaContenedor = e.target.parentElement;

        if (e.target.value.trim() === '') {
            // Mostrar alerta si el campo está vacío, pasando el contenedor
            mostrarAlerts(referenciaContenedor);
        } else {
            // Si hay algo, eliminamos la alerta si existe
            const alerta = referenciaContenedor.querySelector('.alerta-error');
            if (alerta) {
                alerta.remove();
            }
            console.log('si hay');
        }
    }

    // --- EVENT LISTENERS (Usan las funciones ya declaradas) ---
    inputEmail.addEventListener('blur', validarImputs);
    asunto.addEventListener('blur', validarImputs);
    mensaje.addEventListener('blur', validarImputs);

    // Se elimina la llamada final a mostrarAlerts(), ya que causaba un error 
    // al no recibir un argumento (referencia). La validación solo ocurre al 'blur'.
});