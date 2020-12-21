(function () {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    const suma = (a: number, b: number) => a + b;
    const resta = (a: number, b: number) => a - b;
    const multiplicacion = (a: number, b: number) => a * b;
    const division = (a: number, b: number) => (a / b).toFixed(1);
    const raiz = (a: number) => Math.sqrt(a).toFixed(2);

        resultado.innerHTML = `
            <h3>FUNCIONES FLECHA</h3>
            <p>En 6 segundos aparecerá el resultado</p>
            <p>Operaciones aritméticas básicas</p>
            <p>Se pasan como argumentos los números 40 y 6 a las funciones</p>
            <p>Para la raíz cuadrada se pasa como argumento el número 8</p>
        `;

    const operaciones = {
        nombre: 'Daniel',
        activar()  {
            setTimeout(() => {
                resultado.innerHTML += `
                    <p>Suma = ${suma(40,6)}</p>
                    <p>Resta = ${resta(40,6)}</p>
                    <p>Multiplicación = ${multiplicacion(40,6)}</p>
                    <p>División = ${division(40,6)}</p>
                    <p>Raíz cuadrdada = ${raiz(8)}</p>
                `;
            }, 6000)
        }
    }

    operaciones.activar();
})();



