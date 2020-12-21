"use strict";
(() => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
        <h3>PROMESAS</h3>
        <p>Después de 3 segundos aparecerá el resultado</p>
        <p>Se comprobará si se puede retirar dinero en función del saldo disponible</p>
        <p>Si hay suficiente saldo se mostrará el saldo actualizado</p>
        <p>Si no hay suficiente saldo se mostrará un mensaje de error</p>
    `;
    const retirarEfectivo = (retirar) => {
        let saldo = 6000;
        resultado.innerHTML += `<p>Saldo actual de la cuenta: ${saldo}€</p>`;
        return new Promise((resolve, reject) => {
            if (retirar > saldo) {
                setTimeout(() => {
                    reject('No tienes suficiente saldo en la cuenta');
                }, 3000);
            }
            else {
                saldo -= retirar;
                setTimeout(() => {
                    resolve(saldo);
                }, 3000);
            }
        });
    };
    retirarEfectivo(300)
        .then(saldo => resultado.innerHTML += `Saldo actualizado de la cuenta: ${saldo}€`)
        .catch(error => resultado.innerHTML += `${error}`);
})();
