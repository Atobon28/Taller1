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
const union = ordenLoda.union(array1, array2);
console.log(union);

//DESAFIO 4
//Contar Frecuencia de Elementos: Dado un arreglo de palabras, devuelve un objeto con la cantidad de veces que aparece cada palabra.
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuencia = ordenLoda.countBy(palabras);
console.log(frecuencia);

//DESAFIO 5
//Encontrar la Diferencia: Dados dos arreglos, devuelve los elementos que están en el primero pero no en el segundo.
const arr1 = [1, 2, 3, 4, 5];  const arr2 = [3, 4, 5, 6, 7];
const diferencia = ordenLoda.difference(arr1, arr2);
console.log(diferencia);

//DESAFIO 6
//Ordenar por Propiedad: Dado un arreglo de objetos con propiedades nombre y edad, ordénalos por edad de menor a mayor.
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
    ];
const ordenado = ordenLoda.sortBy(personas, ['edad']);
console.log(ordenado);

//DESAFIO 7
//Obtener Valores Únicos: Dado un arreglo con valores repetidos, devuelve un nuevo arreglo con solo los valores únicos.
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const unicos = ordenLoda.uniq(numerosRepetidos); 
console.log(unicos);

//DESAFIO 8
//Dividir un Arreglo en Grupos: Dado un arreglo y un número n, divide el arreglo en grupos de tamaño n.
const n = 3; const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const grupos = ordenLoda.chunk(elementos, n);
console.log(grupos);

//DESAFIO 9
//Transformar un Objeto: Dado un objeto con propiedades nombre, apellido, edad, devuelve un nuevo objeto con las claves en mayúsculas.
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const mayusculas = ordenLoda.mapKeys(persona, (value, key) => key.toUpperCase());
console.log(mayusculas);

//DESAFIO 10
//Aplanar un Arreglo Profundamente: Dado un arreglo anidado con múltiples niveles de profundidad, conviértelo en un arreglo plano.
const anidado = [1, [2, [3, [4, 5]]], 6];
const aplanado = ordenLoda.flattenDeep(anidado);
console.log(aplanado);

//DESAFIO 11
//Encontrar la Intersección de Múltiples Arreglos: Dado varios arreglos, encuentra los elementos comunes entre todos ellos.
const lista1 = [1, 2, 3, 4, 5];const lista2 = [3, 4, 5, 6, 7];const lista3 = [5, 6, 7, 8, 9];
const interseccion = ordenLoda.intersection(lista1, lista2, lista3);
console.log(interseccion);

//DESAFIO 12
//Agrupar por Propiedad Dinámica: Dado un arreglo de objetos y una clave, agrupa los objetos según el valor de esa clave.
const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
const agrupados = ordenLoda.groupBy(estudiantes, clave);
console.log(agrupados);