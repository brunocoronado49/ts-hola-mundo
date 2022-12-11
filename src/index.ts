console.log("Hola Typescript");

let mensaje: string = "Hola Mundo!";

mensaje = "Hello world";
console.log(mensaje);

mensaje = "Adios mundo";


let extincionDino: number = 75_5455_55;
let extintos: boolean = true;
let dinoFav: string = "T-rex";

function chanchoFeliz(config: string) {
    return config;
}

console.log(chanchoFeliz("Bruce"));

let animales: string[] = ["Perro", "Gato", "Ave"];
let numeros: number[] = [1,2,3,4,5];
let facts: boolean[] = [true, false, false];

// Manera diferente de declarar un arreglo
let nums2: Array<number> = []

const animalesUpper = animales.map(x => x.toUpperCase());
const numerosString = numeros.map(y => y.toString());

console.log(animalesUpper);
console.log(numerosString);

let tupla: [number, string] = [1, 'Perro'];
let tupla2: [number, string[]] = [1, ['Perro', 'Gato']];

// Sin enum
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';

// Con enum, PascalCase
enum Talla {
    Chica = 's', // => 0
    Mediana = 'm', // => 1
    Grande = 'l', // => 2
    Extragrande = 'xl' // => 3
}

const var1 = Talla.Grande;
console.log(`Talla: ${var1}`);