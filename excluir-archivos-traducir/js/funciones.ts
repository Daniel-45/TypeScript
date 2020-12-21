(function () {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    resultado.innerHTML = `
        <h3>FUNCIONES CON PARÁMETROS OBLIGATORIOS</h3>
        <h3>LOGIN</h3>
    `;

    function login(usuario: string, password: string) {
        const login = `Hola, ${usuario}`;
        const fecha: Date = new Date();

        if (usuario === 'daniel' && password === 'usertar') {
            return  resultado.innerHTML += `
            <p>
                Fecha: ${fecha.toLocaleDateString()} 
                Hora: ${fecha.toLocaleTimeString()}
            </p>
            ${login}
            `;
        } else {
            return resultado.innerHTML += 'Usuario y/o contraseña no válidos'
        }

    }

    login('daniel', 'usertar');

    resultado.innerHTML += `
        <h3>FUNCIONES CON PARÁMETROS OPCIONALES</h3>
    `;

    function nota(alumno: string, nota: number = 5) {
        resultado.innerHTML += `
        Alumno: ${alumno}<br/>
        Nota media en el CFGS de Desarrollo de Aplicaciones Multiplataforma: ${nota}
    `;
    }

    nota('Daniel', 7);
})();



