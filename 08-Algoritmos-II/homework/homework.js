"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }

  let left = [];
  let right = [];
  let aux = [];
  let pivot = array.pop();
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return aux.concat(quickSort(left), pivot, quickSort(right));
}

function merge(leftArr, rightArr) {
  const output = [];
  let left = 0;
  let right = 0;
  while (left < leftArr.length && right < rightArr.length) {
    const leftElement = leftArr[left];
    const rightElement = rightArr[right];

    if (leftElement < rightElement) {
      output.push(leftElement);
      left++;
    } else {
      output.push(rightElement);
      right++;
    }
  }

  return [...output, ...leftArr.slice(left), ...rightArr.slice(right)];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
