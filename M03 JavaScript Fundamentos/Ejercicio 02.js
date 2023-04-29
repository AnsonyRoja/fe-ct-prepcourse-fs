/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

string = "hola";

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:

   return string;


}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   suma = x + y;

   return suma;

}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:

   resta = x - y;

   return resta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:

   dividir = x / y;

   return dividir;

}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:

   multiplicar = x * y;

   return multiplicar;

}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:

   restoDivision = x % y;

   return restoDivision;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
