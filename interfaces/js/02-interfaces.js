"use strict";
/* interface: una interfaz en POO es un contrato en el que se defineque propiedades y que métodos oibligatorios va a tener una clase.
   Podemos definir la interfaz y aplicar a las clases que queramos.
   Esa clase automáticamente de manera obligatoria tiene que cumplir ese contrato de la interfaz y tienen que existir los métodos o
   propiedades que hayamos definido en esa interfaz.*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Decoradores: Un decorador y cómo utilizarlo un decorador es un patrón de diseño que nos permite
   mediante unos metadatos que nosotros le definimos de acuerdo a una clase para hacer una copia de esa misma
   clase y modificarla o que haga una cosa u otras en función de los parámetros que le pase de acuerdo.
   Hay que habilitar en el fichero tsconfig.ts "experimentalDecorators": true*/
function nacionalidad(pais) {
    return function (target) {
        target.prototype.estableceNacionalidad = function () {
            console.log('País de nacimiento: ' + pais);
        };
    };
}
/* Una clase es un molde para construir objetos.
   Una clase tiene propiedades y métodos.
   La clase debe llamarse igual que el fichero. */
let Persona = class Persona {
    // Contructores -> dar valor inicial a las propiedades del objeto
    constructor(dni, nombre, apellidos, edad, altura, peso) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }
    // Métodos -> funciones o acciones que va a realizar el objeto 
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        return this.dni = dni;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        return this.nombre = nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        return this.apellidos = apellidos;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        return this.edad = edad;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        return this.altura = altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        return this.peso = peso;
    }
};
Persona = __decorate([
    nacionalidad('España')
], Persona);
const resultado = document.querySelector('#resultado');
let emma = new Persona('53443162A', 'Emma', 'Ciambrino Baz', 38, 1.58, 50);
resultado.innerHTML = `
   <h3>CLASE PERSONA</h3>
   ${JSON.stringify(emma)}
`;
console.log(emma);
emma.estableceNacionalidad();
// Clase Hija
class Profesor extends Persona {
    constructor(dni, nombre, apellidos, edad, altura, peso, curso, email, asignaturas) {
        super(dni, nombre, apellidos, edad, altura, peso);
        this.curso = curso;
        this.email = email;
        this.asignaturas = asignaturas;
    }
    getCurso() {
        return this.curso;
    }
    setCurso(curso) {
        this.curso = curso;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAsignaturas() {
        return this.asignaturas;
    }
    setAsignaturas(asignaturas) {
        this.asignaturas = asignaturas;
    }
}
let miguel = new Profesor('51876342M', 'Miguel', 'Sutil Martin', 58, 1.72, 67, 'DAM', 'miguel.sutil@educa.madrid.org', ['Acceso a datos', 'Programación']);
resultado.innerHTML += `
   <h3>CLASE PROFESOR EXTIENDE DE CLASE PERSONA</h3>
   <p>DNI : ${JSON.stringify(miguel.getDni())}</p>
   <p>
      Nombre : ${JSON.stringify(miguel.getNombre())} ${JSON.stringify(miguel.getApellidos())}
   </p>
   <p>Edad : ${JSON.stringify(miguel.getEdad())}</p>
   <p>Altura : ${JSON.stringify(miguel.getAltura())}</p>
   <p>Peso : ${JSON.stringify(miguel.getPeso())} Kg</p>
   <p>Ciclo Formativo Grado Superior : ${JSON.stringify(miguel.getCurso())}</p>
   <p>Email : ${JSON.stringify(miguel.getEmail())}</p>
   <p>Asignaturas : ${JSON.stringify(miguel.getAsignaturas())}</p>
`;
console.log(miguel);
// Clase Hija
class Alumno extends Persona {
    constructor(dni, nombre, apellidos, edad, altura, peso, curso, email, asignaturas, nota) {
        super(dni, nombre, apellidos, edad, altura, peso);
        this.curso = curso;
        this.email = email;
        this.asignaturas = asignaturas;
        this.nota = nota;
    }
    getCurso() {
        return this.curso;
    }
    setCurso(curso) {
        this.curso = curso;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAsignaturas() {
        return this.asignaturas;
    }
    setAsignaturas(asignaturas) {
        this.asignaturas = asignaturas;
    }
    getNota() {
        return this.nota;
    }
    setNota(nota) {
        this.nota = nota;
    }
}
let daniel = new Alumno('53016164Z', 'Daniel', 'Pompa Pareja', 46, 1.79, 77, 'DAM', 'daniel.pompa@gmail.com', [
    'Programación',
    'Bases de Datos',
    'Acceso a datos',
    'Desarrollo de interfaces'
], 7);
resultado.innerHTML += `
   <h3>CLASE ALUMNO EXTIENDE DE CLASE PERSONA</h3>
   <p>DNI : ${JSON.stringify(daniel.getDni())}</p>
   <p>
      Nombre : ${JSON.stringify(daniel.getNombre())} ${JSON.stringify(daniel.getApellidos())}
   </p>
   <p>Edad : ${JSON.stringify(daniel.getEdad())}</p>
   <p>Altura : ${JSON.stringify(daniel.getAltura())}</p>
   <p>Peso : ${JSON.stringify(daniel.getPeso())} Kg</p>
   <p>Ciclo Formativo Grado Superior : ${JSON.stringify(daniel.getCurso())}</p>
   <p>Email : ${JSON.stringify(daniel.getEmail())}</p>
   <p>Asignaturas : ${JSON.stringify(daniel.getAsignaturas())}</p>
   <p>Nota : ${JSON.stringify(daniel.getNota())}</p>
`;
console.log(daniel);
