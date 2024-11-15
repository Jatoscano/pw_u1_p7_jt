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