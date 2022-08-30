"use strict";
// No cambies los nombres de las funciones.

function factorear(num, arr = [1]) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // if (num <= 1) return arr;
  if (num % 2 == 0) {
    arr.push(2);
    return factorear(num / 2, arr);
  } else if (num % 3 == 0) {
    arr.push(3);
    return factorear(num / 3, arr);
  } else if (num % 5 == 0) {
    arr.push(5);
    return factorear(num / 5, arr);
  } else if (num % 11 == 0) {
    arr.push(11);
    return factorear(num / 11), arr;
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = aux;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = [...array];
  for (let i = 0; i < array.length; i++) {
    let min = aux
      .slice(i + 1)
      .reduce((a, e, j) => (e < aux[a] ? j + i + 1 : a), i);

    if (min != i) {
      [aux[i], aux[min]] = [aux[min], aux[i]];
    }
  }
  return aux;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
