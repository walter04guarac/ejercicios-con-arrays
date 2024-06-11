'use strict';

function sumaDeElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let numero1=+prompt('Ingrese un numero',0);
let numero2=+prompt('Ingrese un numero',0);
let numero3=+prompt('Ingrese un numero',0);
let numero4=+prompt('Ingrese un numero',0);



let numeros = [numero1, numero2, numero3, numero4];
let total = sumaDeElementos(numeros);
alert(`La suma de los elementos es: ${total}`);
