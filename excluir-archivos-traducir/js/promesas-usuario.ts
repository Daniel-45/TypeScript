(() => {
    const resultado = <HTMLElement>document.querySelector('#resultado');

    resultado.innerHTML = `
        <h3>PROMESAS</h3>
        <p>Después de 3 segundos aparecerá el resultado</p>
        <p>Si el nombre de usuario es corecto aparecerá el objeto usuario</p>
        <p>Si el nombre de usuario es no corecto aparecerá un mensaje de error</p>
    `;

    const usuario = {
        nombre: 'daniel',
        email: 'daniel.pompa@gmail.com'
    }

    const { nombre } = usuario;

    const p = new Promise((resolve, reject)  => {

        if (nombre === 'daniel') {
            setTimeout(() =>  {
                resolve(JSON.stringify(usuario))
            }, 3000);
        } else {
            setTimeout(() =>  {
                reject('ERROR!! El nombre de usuario no es válido');
            }, 3000);
        }

    });

    p
    .then(mensaje => resultado.innerHTML += `${mensaje}`)
    .catch(error => resultado.innerHTML += `${error}`)


})();



