// Objetivo: Mostrar el uso de funciones lambda en javascript

const cambiarTexto = (idelemento, valor) => { 
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarFondo = (idelemento, fondo) => {
    document.getElementById(idelemento).style.backgroundColor = fondo;
}

const agregarElemento = (idelemento, elementohtml) => {
    document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+elementohtml;
}

const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize=tamanio;
}

const conceptosJS = () => {
    //Tipos de Variables en Javascript

    //var: variable global - Estan en desuso por problemas de alcance

    //let: variable de bloque
    let nombre = "Juan";
    let numero1 = 10;
    let nombre2 = 10.1;
    //const: variable constante
    const PI = 3.1416;

    //Impresion en Consola
    console.log(nombre);
    console.log(numero1);
    console.log(nombre2);
    console.log(PI);
    console.log("Hola Mundo");

    //Declaracion de Arreglos
    
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[2]);
    console.log(diasSemana[3]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    console.log(diasSemana[6]);
    console.log(diasSemana[7]);

    let valor = null;
    console.log(valor);
    
    if(valor === null){
        console.log("El valor es nulo");
    }

    if(valor !== null){
        console.log("El valor no es nulo");
    }

    //Agregar elementos a un arreglo
    //Agregar un elemento al final del arreglo
    diasSemana.push('Dia 8');
    console.log(diasSemana);

    //Agregar un elemento al inicio del arreglo
    diasSemana.unshift('Dia 0');
    console.log(diasSemana);

    //Eliminar un elemento al final del arreglo
    diasSemana.pop();
    console.log(diasSemana);

    //Eliminar un elemento al inicio del arreglo
    diasSemana.shift();
    console.log(diasSemana);

    const numerosImpares = [1,3,5,7,9];
    console.log(numerosImpares);

    const numerosPares = [2,4,6,8,10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    //Sentancias de Control
    for(const dia of diasSemana){
        console.log(dia);

        if(dia === 'Viernes'){
            console.log("Al fin Viernes");
        }

        else{
            console.log("Aun no llega Viernes");
        }
    }

    //Manejo de Objetos
    const misEstudiante = {
        nombre: 'Juan',
        apellido: 'Toscano',
        edad: 28,
        genero: 'Masculino',
        ciudadNacimiento: 'Quito'
    }

    console.log(misEstudiante);
    console.log(misEstudiante.nombre);

    if(misEstudiante.edad === 33){
        console.log("El estudiante tiene 33");
    }
    else{
        console.log("El estudiante no tiene 33");
    }

    misEstudiante.apellido = 'Perez';
    console.log(misEstudiante);

    //Declaraciones de Atributos como Objetos
    const miProfesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 28,
        genero: 'Masculino',
        ciudadNacimiento: 'Quito',
        direccion: {
            calle: 'Av. 10 de Agosto',
            numero: 123,
            barrio: 'La Mariscal'
        }
    }

    console.log(miProfesor);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = 'Av. Amazonas';
    console.log(miProfesor);
    console.log(miProfesor.estatura);

    if(miProfesor.edad === miProfesor.estatura){
        console.log("Son iguales");
    }
    else{
        console.log("No son lo mismo");
    }
}

//Arreglo de Objetos
const est1 = {
    nombre: 'Juan',
    apellido: 'Toscano',
    edad: 28,
    genero: 'Masculino',
    ciudadNacimiento: 'Quito'
}

const est2 = {
    nombre: 'Maria',
    apellido: 'Perez',
    edad: 25,
    genero: 'Femenino',
    ciudadNacimiento: 'Guayaquil'
}

const est3 = {
    nombre: 'Pedro',
    apellido: 'Alvarez',
    edad: 30,
    genero: 'Masculino',
    ciudadNacimiento: 'Cuenca'
}
const estudiantes1 = [est1, est2, est3]

console.log(estudiantes1);
console.log(estudiantes1[0]);
console.log(estudiantes1[1].nombre);

//Declaramos un arreglo de objetos
const estudiantes2 = [
    {
        nombre: 'Edison',
        apellido: 'Lopez',
        edad: 23,
        genero: 'Masculino',
        ciudadNacimiento: 'Quito'
    },
    {
        nombre: 'Maria',
        apellido: 'Benitez',
        edad: 24,
        genero: 'Femenino',
        ciudadNacimiento: 'Guayaquil'
    },
    {
        nombre: 'Pedro',
        apellido: 'Alvarez',
        edad: 40,
        genero: 'Masculino',
        ciudadNacimiento: 'Cuenca'
    },
    {
        nombre: 'Luis',
        apellido: 'Garcia',
        edad: 35,
        genero: 'Masculino',
        ciudadNacimiento: 'Manta'
    },
    {
        nombre: 'Ana',
        apellido: 'Perez',
        edad: 28,
        genero: 'Femenino',
        ciudadNacimiento: 'Quito'
    }
]

console.log(estudiantes2);
//Imprimir como tabla los datos de los estudiantes
console.table(estudiantes2);

const eliminarEstudiante = estudiantes2.pop();

console.log(eliminarEstudiante);
console.table(estudiantes2);

//Desestructuracion de Arrerglos
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Blanco'];

const [c1, c2, c3, c4, c5] = colores;
console.log(c1);
console.log(c2);

//Desestructuracion de Arreglos Reducido
const [m1, m2, m3, m4, m5, m6, m7, m8] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(m1);
console.log(m2);
console.log(m8);

//La desetruccion puede ser selectiva y traabaja de acorde a la posicion
const [ , mes2, , , mes5] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(mes2);
console.log(mes5);

//Desestructuracion de Objetos
const automovil = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2021,
    color: 'Rojo'
}

const {marca, modelo, anio, color} = automovil;

console.log(marca);
console.log(modelo);
console.log(anio);
console.log(color);

const automovil2 = {
    marca: 'Chevrolet',
    modelo: 'Spark',
    anio: 2020,
    color: 'Blanco'
}

const desestructuracion = (automovil) =>{
    
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}

const desestructuracion2 = ({marca, modelo, anio, color}) =>{
    
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}

desestructuracion(automovil2);

//Desestructuracion en una sola linea
const {animal, raza, edad} = { animal: 'Perro', raza: 'Pastor Aleman', edad: 5, color: 'Cafe'};

console.log(animal);
console.log(raza);
console.log(edad);

//Declarar un objeto con un atributro complejo, de tipo objeto

const profesional = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    genero: 'Masculino',
    ciudadNacimiento: 'Quito',
    direccion: {
        calle: 'Av. 10 de Agosto',
        numero: 123,
        barrio: 'La Mariscal'
    }
}

//Desetruturar el artibuto de tipo objeto

/*
const {nombre,direccion} = profesional;
console.log(nombre);
console.log(direccion);
*/

//en dos pasos
/*
const {nombre, direccion} = profesional;
const {calle} = direccion;

console.log(calle);
*/

//En un paso

const {nombre, direccion: {calle, numero, barrio}} = profesional;
console.log(nombre);
console.log(calle);
console.log(numero);
console.log(barrio);
