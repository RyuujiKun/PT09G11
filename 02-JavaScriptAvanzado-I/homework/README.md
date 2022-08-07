# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

<!-- Rta.: La diferencia es que con var la variable queda declarada con el valor 'undefined' y dentro de un contexto global-->

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
// Rta.: El resultado de llamar la función c con los valores 8, 9 y 10 será 10, 8, 8, 9 ya que se pinta en pantalla el valor de x el cual es 10 (vax x = 10), luego el valor de b es reemplazado con el valor de a, el cual es 8 y se pinta en pantalla, posteriormente el valor de b es reemplazado con el valor de c, el cual es 10 y se imprime una vez más el valor de b, el cual es ahora 10. Finalmente, se pide que se imprima los valores de b y x, los cuales son 10 (var b = 10) y 1 (x = 1).
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
// Rta.: imprimirá por consola undefined ya que la declaración con var hará que javascript lea primero su declaración y le asigne primeramente un valor de undefined, al ser llamada en el console.log(), al tener usignado el valor de undefined, será ese el valor que se imprimirá, luego, al pasar al siguiente console log, lanzará un error, ya que la variable baz aún no existe en ese momento de la ejecución, lo que hará que el programa finalice inmediatamente, finalmente, la función foo() imprimirá en consola la palabra 'Hola!' dado que el hoisting, al igual que pasó con la variable bar, declarada con var, la llevará al inicio del programa, por así decirlo.
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);
// Rta.: Se imprimirá el valor de Franco ya que var llevará a la variable a un nivel global.
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);
// Primeramente se imprime el valor de Tony, ya que no existe otro valor para la variable instructor en ese momento, seguidamente se crea 'un nuevo entorno de ejecución o conexto' y dentro se crea una función anónima, dentro se crea una nueva varable instructor que sólo vive dentro de eje contexto o entorno de ejecución, por lo que la asignación de la variable Franco, no afecta el valor de la variable que se encuentra fuera, por lo que el último console.log() imprimirá el valor de Tony.
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //The Flash
  console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2 (coversión de '3' a 3)
"2" * "3" // 6 (conversión de '2' a 2 y '3' a 3)
4 + 5 + "px" // 9px (suma 4 + 5 el cual da 9, luego lo convierte a '9' y le suma 'px'
"$" + 4 + 5 //$45 (conversión de 4 a '4' y luego concatena '$' y finalmente convierte 5 a '5' y lo concatena)
"4" - 2 // 2
"4px" - 2 // NaN o error (no podría hacer una conversión y daría un error o Not a Number)
7 / 0 // Infinity
{}[0] //undefined (Intentaría acceder a la primera propiedad del objeto, e cual al no existir, tendría por defecto undefined)
parseInt("09") //9
5 && 2 // 2 (&& devuelve el segundo valor si la primera expresión es verdadera)
2 && 5 // 5
5 || 0 // 0
0 || 5 // 5 (|| devuelve el segundo valor si la primera expresión es falsa)
[3]+[3]-[10] // idk
3>2>1 // falso
[] == ![] // verdadero (apuntan a objetos diferentes)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// Rta.: la palabra reservada var lleva a la variable a al principio del contexto de la función y le asigna por defecto el valor de undefined, sin embargo, como se llama a la variable antes de su declaración y asignación, esta devolverá undefined. El hoisting lleva al principio del contexto de la función la referencia a la función foo() por lo que apesar de que se llama a la función antes de su declaración y definición, esta puede retornar 2;
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
// Rta.: debe retornar undefined ya que al llamar a la función getFood() con el valor false, y al validarlo a través del if, el if nunca se ejecutará, por lo que retornará el valor de snack que tenga en el contexto de la función, dado que no existe retirnará undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
// Rta.: El primer console.log() imprimirá 'Aurelio de la Rosa' ya que el this se encuentra dentro del objeto prop, el cual tiene una propiedad llamada fullname con el valor de 'Aurelio de la Rosa', el segundo console.log() debe retornar o 'Juan Pérez' o 'Natalia Nerea' no estoy seguro =(
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
// Rta.: Primero se ejecuta el primer console.log(), luego los console.log(2) y console.log(3) pasan a la cola y se ejecuta el console.log(4), finalmente, luego de que se ejecute el timeout, se ejecutarán el console.log(2) y console.log(3) en ese orden.
```
