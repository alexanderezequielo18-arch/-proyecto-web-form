// ============================
// Servicios Hogar - Script
// ============================

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            // Validacion nativa de Bootstrap/HTML5
            if (!formulario.checkValidity()) {
                evento.preventDefault();
                evento.stopPropagation();
                formulario.classList.add("was-validated");
                return;
            }

            // Si el formulario es valido, mostramos el mensaje
            // de confirmacion antes de que se envie a FormSubmit
            formulario.classList.add("was-validated");

            if (mensajeConfirmacion) {
                mensajeConfirmacion.classList.remove("d-none");
            }

            // Nota: no se usa evento.preventDefault() aqui para
            // permitir que el formulario se envie normalmente
            // hacia "action" (FormSubmit) y luego redirija a "_next".
        });
    }

    // Cierra el menu de navegacion (en mobile) al hacer click en un enlace
    const enlacesMenu = document.querySelectorAll("#menu .nav-link");
    const menuCollapse = document.getElementById("menu");

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            if (menuCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuCollapse);
                bsCollapse.hide();
            }
        });
    });

});
