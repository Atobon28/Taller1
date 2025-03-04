//DESAFIO 1
//Inversión de un Arreglo: Dado el siguiente arreglo de números, devuélvelo en orden inverso usando Lodash.
const numeros = [1, 2, 3, 4, 5];
const ordenLoda = require('lodash');
const numerosInvertidos = ordenLoda.reverse(numeros);
console.log(numerosInvertidos);

//DESAFIO 2
//Elimina Valores Falsy: Dado un arreglo con valores mixtos, filtra los valores falsy (false, 0, "", null, undefined, NaN).
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
const filtrados = ordenLoda.compact(valores);
console.log(filtrados); 

//DESAFIO 3
//Unión de Arreglos: Dados dos arreglos, únelos sin duplicados.
const array1 = [1, 2, 3]; const array2 = [3, 4, 5];
