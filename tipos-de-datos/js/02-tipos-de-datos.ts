(() => {
    const resultado = <HTMLElement>document.querySelector('#resultado');
    let fecha: Date = new Date();
    let nombre: string = 'Daniel';
    let edad: number = 46;
    let casado: boolean = true;
    let email: string = 'daniel.pompa@gmail.com';
    let telefonos: Array<String> = new Array('91 676 99 89', '648 11 88 58');

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
    }

    resultado.innerHTML += `
        <h3>ALUMNO</h3>
        <p>${JSON.stringify(alumno)}</p>
    `;
})();



