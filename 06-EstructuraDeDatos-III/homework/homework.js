"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  size() {
    if (this.value === null) return 0;
    if (this.left === null && this.right === null) return 1;
    if (this.left === null && this.right !== null) return 1 + this.right.size();
    if (this.right === null && this.left !== null) return 1 + this.left.size();
    return 1 + this.right.size() + this.left.size();
  }
  insert(value) {
    if (value > this.value) {
      if (this.right === null) {
        return (this.right = new BinarySearchTree(value));
      } else {
        return this.right.insert(value);
      }
    }

    if (value < this.value) {
      if (this.left === null) {
        return (this.left = new BinarySearchTree(value));
      } else {
        return this.left.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) return true;

    if (value > this.value) {
      if (this.right === null) return false;
      return this.right.contains(value);
    }

    if (value < this.value) {
      if (this.left === null) return false;
      return this.left.contains(value);
    }
  }
  depthFirstForEach(callback, order) {
    if (order === "post-order") {
      if (this.left !== null) this.left.depthFirstForEach(callback, order);
      if (this.right !== null) this.right.depthFirstForEach(callback, order);
      callback(this.value);
    } else if (order === "pre-order") {
      callback(this.value);
      if (this.left !== null) this.left.depthFirstForEach(callback, order);
      if (this.right !== null) this.right.depthFirstForEach(callback, order);
    } else {
      if (this.left !== null) this.left.depthFirstForEach(callback, order);
      callback(this.value);
      if (this.right !== null) this.right.depthFirstForEach(callback, order);
    }
  }
  breadthFirstForEach(callback, queue = []) {
    if (this.left !== null) queue.push(this.left);
    if (this.right !== null) queue.push(this.right);

    callback(this.value);

    if (queue.length) {
      queue.shift().breadthFirstForEach(callback, queue);
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
