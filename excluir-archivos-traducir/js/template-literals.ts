(function () {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    function edad() {
        return 45 + 1;
    }

    const nombre: string = 'Daniel';
    const apellidos:string = 'Pompa Pareja';
    const email:string = 'daniel.pompa@gmail.com';
    const telefonos: Array<String> = new Array('91 676 99 89', '648 11 88 58');

    resultado.innerHTML = `
        <h3>PERSONA</h3>
        <p>Nombre: ${nombre} ${apellidos}</p>
        <p>Edad: ${edad()}</p>
        <p>Email: ${email}</p>
        <p>Teléfonos: ${telefonos}</p>
    `;
})();



