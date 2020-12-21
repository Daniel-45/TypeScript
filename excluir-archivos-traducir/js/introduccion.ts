(function() {
    const daniel = { nombre: 'Daniel' };
    let resultado = <HTMLElement>document.querySelector('#resultado');

    function saludar( nombre:string ) {
        resultado.innerHTML = 'Hola, ' + nombre;
        console.log('Hola ' + nombre) // Hola Daniel
    }
    
    saludar(daniel.nombre);
})();


