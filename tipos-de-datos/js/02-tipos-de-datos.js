"use strict";
(() => {
    const resultado = document.querySelector('#resultado');
    let fecha = new Date();
    let nombre = 'Daniel';
    let edad = 46;
    let casado = true;
    let email = 'daniel.pompa@gmail.com';
    let telefonos = new Array('91 676 99 89', '648 11 88 58');
    resultado.innerHTML = `
        <h3>PERSONA</h3>
        <p>Fecha: ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}</p>
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Casado: ${casado}</p>
        <p>Email: ${email}</p>
        <p>Teléfonos: ${telefonos}</p>
    `;
    const alumno = {
        nombre: 'Emma',
        email: 'emma.ciambrino@educa.madrid.org',
        aprendiendo: ['TypeScript', 'Angular']
    };
    resultado.innerHTML += `
        <h3>ALUMNO</h3>
        <p>${JSON.stringify(alumno)}</p>
    `;
})();
