'use strict';

function multiplicarPorTres(array) {
    for (let i = 0; i < array.length; i++) {
        alert(array[i]+'x'+'3 = '+(array[i] * 3));
    }
}
let numero1=+prompt('Ingrese un numero',0);
let numero2=+prompt('Ingrese un numero',0);
let numero3=+prompt('Ingrese un numero',0);
let numero4=+prompt('Ingrese un numero',0);



let numeros = [numero1, numero2, numero3, numero4];
multiplicarPorTres(numeros);
