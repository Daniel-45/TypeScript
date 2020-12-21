"use strict";
(() => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '<h3>INTERFACES</h3>';
    const alumno = {
        nombre: 'Daniel',
        apellidos: 'Pompa Pareja',
        edad: 46,
        email: 'daniel.pompa@educa.madrid.org',
        nota: 5
    };
    const mostrarAlumno = (alumno) => {
        resultado.innerHTML += `
            <p>Nombre: ${alumno.nombre}</p>
            <p>Email: ${alumno.email}</p>
            <p>Nota: ${alumno.nota}</p>
        `;
    };
    mostrarAlumno(alumno);
    const subirNota = (alumno) => {
        resultado.innerHTML += `
        <h3>SUBIR NOTA AL ALUMNO</h3>
        <p>Nombre: ${alumno.nombre}</p>
        <p>Email: ${alumno.email}</p>
        <p>Nota: ${alumno.nota + 2}</p>
        `;
    };
    subirNota(alumno);
})();
