/*
Ejercicio 2 - Notación decimal y factorial
Dos funciones decimalToFactorial (1) y factorialToDecimal (2)
- (1) = Recibirá un entero positivo y devolverá como result una cadena de texto
- (2) = Realizará la operación opuesta texto y devuelve numero entero
Ejemplo: 463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0! = 341010
*/
function factorial(numero) {
    if (numero == 0) {
        return 1;
    }
    else {
        return (numero * factorial(numero - 1));
    }
}
function decimalToFactorial(numero) {
    let result = ' ';
    let cont = 1; // 1
    while (numero != 0) {
        result = (numero % cont).toString() + result; // convierte a string + result
        numero = Math.floor(numero / cont); // redondea más bajo
        cont++; // 1++
    }
    return result; // lo devuelve
}
function factorialToDecimal(numero) {
    let result = 0;
    let aux = 0;
    for (let i = numero.length - 1; i >= 0; i--) { // recorre --
        result += parseInt(numero[aux]) * factorial(i); // cadena a int
        aux++;
    }
    return result;
}
let numero = 463;
let funcion2 = decimalToFactorial(463);
console.log(`${numero} a Factorial -> ${funcion2}`);
numero = "341010";
funcion2 = factorialToDecimal('341010');
console.log(`${numero} a Factorial -> ${funcion2}`);
