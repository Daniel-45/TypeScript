/* interface: una interfaz en POO es un contrato en el que se defineque propiedades y que métodos oibligatorios va a tener una clase.
   Podemos definir la interfaz y aplicar a las clases que queramos. 
   Esa clase automáticamente de manera obligatoria tiene que cumplir ese contrato de la interfaz y tienen que existir los métodos o 
   propiedades que hayamos definido en esa interfaz.*/

interface IPersona {
   getDni(): string;
   setDni(dni: any): string;
   getNombre(): string;
   setNombre(nombre: any): string;
   getApellidos(): string;
   setApellidos(apellidos: any): string;
   getEdad(): number;
   setEdad(edad: any): number;
   getAltura(): number;
   setAltura(altura: any): number;
   getPeso(): number;
   setPeso(peso: any): number;
}

/* Decoradores: Un decorador y cómo utilizarlo un decorador es un patrón de diseño que nos permite
   mediante unos metadatos que nosotros le definimos de acuerdo a una clase para hacer una copia de esa misma 
   clase y modificarla o que haga una cosa u otras en función de los parámetros que le pase de acuerdo.
   Hay que habilitar en el fichero tsconfig.ts "experimentalDecorators": true*/

function nacionalidad(pais: string) {
   return function (target: Function) {
      target.prototype.estableceNacionalidad = function (): void {
         console.log('País de nacimiento: ' + pais);
      }
   }
}

/* Una clase es un molde para construir objetos. 
   Una clase tiene propiedades y métodos. 
   La clase debe llamarse igual que el fichero. */

@nacionalidad('España')
class Persona implements IPersona {
   [x: string]: any;

   // Propiedades -> características del objeto
   protected dni: string;
   protected nombre: string;
   protected apellidos: string;
   protected edad: number;
   protected altura: number;
   protected peso: number;

   // Contructores -> dar valor inicial a las propiedades del objeto
   constructor(dni: string, nombre: string, apellidos: string,
      edad: number, altura: number, peso: number) {
      this.dni = dni;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.altura = altura;
      this.peso = peso;
   }

   // Métodos -> funciones o acciones que va a realizar el objeto 
   getDni(): string {
      return this.dni;
   }
   setDni(dni: any): string {
      return this.dni = dni;
   }

   public getNombre() {
      return this.nombre;
   }

   setNombre(nombre: any): string {
      return this.nombre = nombre;
   }

   public getApellidos() {
      return this.apellidos;
   }

   setApellidos(apellidos: any): string {
      return this.apellidos = apellidos;
   }

   public getEdad() {
      return this.edad;
   }

   setEdad(edad: any): number {
      return this.edad = edad;
   }

   public getAltura() {
      return this.altura;
   }

   setAltura(altura: any): number {
      return this.altura = altura;
   }

   public getPeso() {
      return this.peso;
   }

   setPeso(peso: any): number {
      return this.peso = peso;
   }

}

const resultado = <HTMLElement>document.querySelector('#resultado');

let emma = new Persona('53443162A', 'Emma', 'Ciambrino Baz', 38, 1.58, 50);

resultado.innerHTML = `
   <h3>CLASE PERSONA</h3>
   ${JSON.stringify(emma)}
`;

console.log(emma);

emma.estableceNacionalidad();

// Clase Hija
class Profesor extends Persona {
   private curso: string;
   private email?: string;
   private asignaturas: Array<string>;

   constructor(dni: string, nombre: string, apellidos: string, edad: number,
      altura: number, peso: number, curso: string, email: string, asignaturas: string[]) {
      super(dni, nombre, apellidos, edad, altura, peso);
      this.curso = curso;
      this.email = email;
      this.asignaturas = asignaturas;
   }

   public getCurso() {
      return this.curso;
   }

   public setCurso(curso: string) {
      this.curso = curso;
   }

   public getEmail() {
      return this.email;
   }

   public setEmail(email: string) {
      this.email = email;
   }

   public getAsignaturas() {
      return this.asignaturas;
   }

   public setAsignaturas(asignaturas: string[]) {
      this.asignaturas = asignaturas;
   }
}

let miguel = new Profesor('51876342M', 'Miguel', 'Sutil Martin',
   58, 1.72, 67, 'DAM', 'miguel.sutil@educa.madrid.org', ['Acceso a datos', 'Programación']);

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
   private curso: string;
   private email?: string;
   private asignaturas: Array<string>;
   private nota: number;

   constructor(dni: string, nombre: string, apellidos: string, edad: number,
      altura: number, peso: number, curso: string, email: string, 
      asignaturas: string[], nota: number) {
      super(dni, nombre, apellidos, edad, altura, peso);
      this.curso = curso;
      this.email = email;
      this.asignaturas = asignaturas;
      this.nota = nota;
   }

   public getCurso() {
      return this.curso;
   }

   public setCurso(curso: string) {
      this.curso = curso;
   }

   public getEmail() {
      return this.email;
   }

   public setEmail(email: string) {
      this.email = email;
   }

   public getAsignaturas() {
      return this.asignaturas;
   }

   public setAsignaturas(asignaturas: string[]) {
      this.asignaturas = asignaturas;
   }

   public getNota() {
      return this.nota;
   }

   public setNota(nota: number) {
      this.nota = nota;
   }

}

let daniel = new Alumno(
   '53016164Z', 'Daniel',
   'Pompa Pareja',
   46,
   1.79,
   77,
   'DAM',
   'daniel.pompa@gmail.com',
   [
      'Programación',
      'Bases de Datos',
      'Acceso a datos',
      'Desarrollo de interfaces'
   ],
   7);

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