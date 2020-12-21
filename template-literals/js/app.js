"use strict";
// Los templates literales permiten el procesamiento de información
// Dentro de las llaves se pueden llamar funciones, ejecutar procedimientos,
// operaciones matemáticas...
(function () {
    const resultado = document.querySelector('#resultado');
    function edad() {
        return 45 + 1;
    }
    const nombre = 'Daniel';
    const apellidos = 'Pompa Pareja';
    const email = 'daniel.pompa@gmail.com';
    const telefonos = new Array('91 676 99 89', '648 11 88 58');
    resultado.innerHTML = `
        <h3>PERSONA</h3>
        <p>Nombre: ${nombre} ${apellidos}</p>
        <p>Edad: ${edad()}</p>
        <p>Email: ${email}</p>
        <p>Teléfonos: ${telefonos}</p>
    `;
})();
