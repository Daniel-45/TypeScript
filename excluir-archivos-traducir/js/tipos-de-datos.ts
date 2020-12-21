(() => {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    // number
    let numero: number = 45;

    resultado.innerHTML += `
        <p>Tipo number : ${numero} : ${typeof (numero)}</p>
    `;

    console.log('Tipo number:', numero);

    // string
    let cadena: string = 'Hola mundo';

    resultado.innerHTML += `
        <p>Tipo string : ${cadena} : ${typeof (cadena)}</p>
    `;

    console.log('Tipo string:', cadena);

    // boolean
    let verdaderoFalso: boolean = true;

    resultado.innerHTML += `
        <p>Tipo boolean : ${verdaderoFalso} : ${typeof (verdaderoFalso)}</p>
    `;

    console.log('Tipo boolean:', verdaderoFalso);

    // any
    let cualquierValor: any = 'Daniel';

    resultado.innerHTML += `
        <p>Tipo any : ${cualquierValor} : ${typeof (cualquierValor)}</p>
    `;

    console.log('Tipo any:', cualquierValor);

    cualquierValor = 97;

    resultado.innerHTML += `
        <p>Tipo any modificado : ${cualquierValor} : ${typeof (cualquierValor)}</p>
    `;

    // Varios tipos
    let variosTipos: string | number = 'Emma';

    resultado.innerHTML += `
        <p>Varios tipos : ${variosTipos} : ${typeof (variosTipos)}</p>
    `;

    console.log(variosTipos);

    variosTipos = 38;

    resultado.innerHTML += `
        <p>Varios tipos : ${variosTipos} : ${typeof (variosTipos)}</p>
    `;

    console.log(variosTipos);

    // Tipos de datos personalizados
    type alfanumerico = String | number;

    let cadenaNueva: alfanumerico = 'Daniel' + 45;

    resultado.innerHTML += `
        <p>Personalizados : ${cadenaNueva} : ${typeof (cadenaNueva)}</p>
    `;

    console.log('Datos personalizados', cadenaNueva);

    // Arrays
    let arrayString: Array<string> = ['Java', 'TypeScript', 'JavaScript', 'C#', 'PHP'];

    resultado.innerHTML += `
        <p>Arrays : ${arrayString} : ${typeof (arrayString)}</p>
    `;

    console.log('Arrays string:', arrayString);

    let arrayNumber: number[] = [8, 6, 4, 7, 9];

    resultado.innerHTML += `
        <p>Arrays : ${arrayNumber} : ${typeof (arrayNumber)}</p>
    `;

    console.log('Arrays numeros:', arrayNumber);

    let arrayAny: any[] = ['Hola', 8, 'Mundo'];

    console.log('Arrays any:', arrayAny);

    // Variables let vs var
    // var scope global y let scope de bloque
    var numero1 = 10;
    var numero2 = 20;

    resultado.innerHTML += `
        <h3>Variables let vs var</h3>
        <p>var scope global y let scope de bloque</p>
        <p>Números iniciales : ${numero1}, ${numero2}</p>
    `;

    if (numero1 == 10) {
        let numero1 = 45;
        var numero2 = 88; // Cambia el valor a la variable global
        resultado.innerHTML += `
            <p>Números dentro del if : ${numero1}, ${numero2}</p>
        `;

        console.log('Números dentro del if :', numero1, numero2);
    }

    resultado.innerHTML += `
        <p>Números fuera del if : ${numero1}, ${numero2}</p>
    `;
    console.log('Números fuera del if:', numero1, numero2);
})()