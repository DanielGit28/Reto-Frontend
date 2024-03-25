// Función para validar el formato de correo electrónico usando expresiones regulares (regex)
function validarCorreo(correo) {
    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        var emailInput = document.getElementById('emailInput');
        var nombreInput = document.getElementById('nombreInput');
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            if(!validarCorreo(form.email.value)) {
                emailInput.classList.add('is-invalid');
            } else {
                emailInput.classList.remove('is-invalid');
            }
            if(form.nombre.value.trim() === '') {
                nombreInput.classList.add('is-invalid');
            } else {
                nombreInput.classList.remove('is-invalid');
            }
            
            form.classList.remove('was-validated');
        } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            alert("Formulario enviado!");
        }
    });

    form.email.addEventListener('input', function () {
        var emailInput = document.getElementById('emailInput');
        if (validarCorreo(this.value)) {
            emailInput.classList.remove('is-invalid');
        } else {
            emailInput.classList.add('is-invalid');
        }
    });

    form.nombre.addEventListener('input', function () {
        var nombreInput = document.getElementById('nombreInput');
        if (this.value.trim() !== '') {
            nombreInput.classList.remove('is-invalid');
        } else {
            nombreInput.classList.add('is-invalid');
        }
    });
});

