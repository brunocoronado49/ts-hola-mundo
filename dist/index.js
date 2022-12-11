"use strict";
console.log("Hola Typescript");
let mensaje = "Hola Mundo!";
mensaje = "Hello world";
console.log(mensaje);
mensaje = "Adios mundo";
let extincionDino = 75545555;
let extintos = true;
let dinoFav = "T-rex";
function chanchoFeliz(config) {
    return config;
}
console.log(chanchoFeliz("Bruce"));
let animales = ["Perro", "Gato", "Ave"];
let numeros = [1, 2, 3, 4, 5];
let facts = [true, false, false];
let nums2 = [];
const animalesUpper = animales.map(x => x.toUpperCase());
const numerosString = numeros.map(y => y.toString());
console.log(animalesUpper);
console.log(numerosString);
let tupla = [1, 'Perro'];
let tupla2 = [1, ['Perro', 'Gato']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
// IFEE -> Funcion inmediatamente invocada
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["Extragrande"] = "xl";
})(Talla || (Talla = {}));
const var1 = Talla.Grande;
console.log(`Talla: ${var1}`);
//# sourceMappingURL=index.js.map