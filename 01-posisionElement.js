'use strict';

function mostrarElementosConPosicion(array) {
    for (let i = 0; i < array.length; i++) {
        alert(`Posición ${i}: ${array[i]}`);
    }
}

let strings = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
mostrarElementosConPosicion(strings);
