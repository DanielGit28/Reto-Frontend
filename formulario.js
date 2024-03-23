// Función para validar el formato de correo electrónico usando expresiones regulares (regex)
function validarCorreo(correo) {
    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Obtener el formulario
    var form = document.querySelector('.needs-validation');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        // Detener el envío del formulario si la validación no es exitosa
        if (!form.checkValidity() || !validarCorreo(form.email.value)) {
            event.preventDefault();
            event.stopPropagation();

            // Mostrar un mensaje de error para el campo de correo electrónico
            var emailInput = document.getElementById('emailInput');
            emailInput.classList.add('is-invalid');
            form.classList.remove('was-validated');
        } else {
            // Agregar la clase 'was-validated' al formulario para mostrar los estilos de validación de Bootstrap
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }

        
    });

    // Manejar el evento de cambio del campo de correo electrónico para eliminar la clase 'is-invalid' si es necesario
    form.email.addEventListener('input', function () {
        var emailInput = document.getElementById('emailInput');
        if (validarCorreo(this.value)) {
            emailInput.classList.remove('is-invalid');
        } else {
            emailInput.classList.add('is-invalid');
        }
    });
});
