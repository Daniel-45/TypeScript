"use strict";
(function () {
    const daniel = { nombre: 'Daniel' };
    let resultado = document.querySelector('#resultado');
    function saludar(nombre) {
        resultado.innerHTML = 'Hola, ' + nombre;
        console.log('Hola ' + nombre); // Hola Daniel
    }
    saludar(daniel.nombre);
})();
