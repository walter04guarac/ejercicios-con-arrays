'use strict';

function multiplicarPorTres(array) {
    for (let i = 0; i < array.length; i++) {
        alert(array[i]+'x'+'3 ='+(array[i] * 3));
    }
}

let numeros = [1, 2, 3, 4];
multiplicarPorTres(numeros);
