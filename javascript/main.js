// Pedimos al usuario que ingrese el rango
var inicio = parseInt(prompt("Ingrese el número de inicio del rango"));
var fin = parseInt(prompt("Ingrese el número de fin del rango"));

// Vamos a iterar sobre cada número dentro del rango
for (var numero = inicio; numero <= fin; numero++) {
    // Contador para verificar si el número es primo
    var contador = 0;

    // Recorremos los números desde 1 hasta el valor actual de 'numero'
    for (var i = 1; i <= numero; i++) {
        var modulo = numero % i;
        if (modulo == 0) {
            contador = contador + 1; // Contamos las divisiones exactas
        }
    }

    // Verificamos si es primo (solo divisible por 1 y por sí mismo)
    if (contador == 2) {
        document.write(numero + " es un número primo <br>");
    } else {
        document.write(numero + " no es un número primo <br>");
    }
}