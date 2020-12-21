(() => {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    resultado.innerHTML = '<h3>CLASES</h3>';

    class Persona {

        constructor(
            private dni: string, 
            private nombre: string, 
            private edad?: number,
            private email?: string) {}
    }

    const persona = new Persona('53236654A', 'Daniel',
    46,'daniel.pompa@gmail.com');

    resultado.innerHTML += `${JSON.stringify(persona)}`

})();


