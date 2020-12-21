(() => {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    resultado.innerHTML = `
        <h3>DESESTRUCTURACIÓN DE OBJETOS Y ARRAYS</h3>
        <p>
            Permite extraer una de la propiedades que nos interesen del objeto y crear variables inmediatamente.
        </p>
    `;

    resultado.innerHTML += `
        <h3>DESESTRUCTURACIÓN DE OBJETOS</h3>
    `;

    const persona = {
        nombre: 'Daniel',
        apellidos: 'Pompa Pareja',
        edad: 46,
        email: 'daniel.pompa@gmail.com'
    }

    resultado.innerHTML += `
        <h4>OBJETO PERSONA COMPLETO</h4>
        <p>${JSON.stringify(persona)}</p>
    `;

    const extraer = ({ nombre, email }: any) => {
        resultado.innerHTML += `
            <h4>DESTRUCTURING</h4>
            <p>${nombre}, ${email}</p>
        `;
    };

    extraer(persona);

    resultado.innerHTML += `
        <h3>DESESTRUCTURACIÓN DE ARRAYS</h3>
    `;

    const peliculas: String[] = ['Seven', 'Casino', 'Cadena Perpetua'];

    resultado.innerHTML += `
        <h4>ARRAY COMPLETO</h4>
    `;

    peliculas.forEach(item => {
        resultado.innerHTML += `
            [${item}]
        `;
    });

    const [seven, casino] = peliculas;

    resultado.innerHTML += `
        <h4>DESTRUCTURING</h4>
        ${seven}, ${casino}
    `;
})();



