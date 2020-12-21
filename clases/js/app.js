"use strict";
(() => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '<h3>CLASES</h3>';
    class Persona {
        constructor(dni, nombre, edad, email) {
            this.dni = dni;
            this.nombre = nombre;
            this.edad = edad;
            this.email = email;
        }
    }
    const persona = new Persona('53236654A', 'Daniel', 46, 'daniel.pompa@gmail.com');
    resultado.innerHTML += `${JSON.stringify(persona)}`;
})();
