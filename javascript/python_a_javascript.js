//def saludar_usuario
function saludar(nombre) {
    return "Hola, " + nombre + "! Bienvenido al curso de programación.";
}
//def repetir_texto
function repetir_texto(texto, veces) {
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado += texto;
    }
    return resultado;
}
//def invertir_palabra sin slicing
function invertir_palabra(palabra) {
    let len = palabra.length;
    let palabra_invertida = "";
    for (let i = len - 1; i >= 0; i--) {
        palabra_invertida += palabra[i];
    }
    return palabra_invertida;
}
//def invertir_palabra con slicing
function invertir_palabra_slicing(palabra) {
    // 1. .split('') convierte la cadena en un array de caracteres.
    //    Ej: "Hola" -> ["H", "o", "l", "a"]
    //let arrayDeLetras = palabra.split('');

    // 2. .reverse() invierte el orden de los elementos en el array.
    //    Ej: ["H", "o", "l", "a"] -> ["a", "l", "o", "H"]
    //let arrayInvertido = arrayDeLetras.reverse();

    // 3. .join('') une los elementos del array de nuevo en una cadena.
    //    Ej: ["a", "l", "o", "H"] -> "aloH"
    //let palabraInvertida = arrayInvertido.join('');
    return palabra.split('').reverse().join('');
}
//def contar_vocales
function contar_vocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        if(vocales.includes(texto[i])) {
            contador += 1;
        }
    }
    return contador;
}
//def mayusculas_y_minusculas
function mayusculas_y_minusculas(texto) {
    return texto.toUpperCase() + " " + texto.toLowerCase();
}
//def promedio_lista
function promedio_lista(numeros) {
    //.reduce(funcionReductora, valorInicial)
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}
//def maximo_y_minimo
function maximo_y_minimo(numeros) {
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    return [maximo, minimo];
}
//def filtar_pares
function filtrar_pares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}
//def sumar_elementos_texto
function sumar_elementos_texto(lista_textos) {
    return lista_textos.join('');
}
//def buscar_elemento
function buscar_elemento(lista, elemento) {
    return lista.includes(elemento);
}
//def contar_palabras
function contar_palabras(frase){
    return frase.trim().split(' ').filter(palabra => palabra !== '').length;
}
//def duplicar_elementos
function duplicar_elementos(lista) {
    return lista.map(elemento => elemento * 2);
}
//def capitalizar_palabras
function capitalizar_palabras(frase) {
    //slice(1) toma desde el indice 1 hasta el final
    return frase.trim().split(' ').filter(palabra => palabra !== '').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
}
//def mezcar_listas
function mezclar_listas(lista1, lista2) {
    let combinada = [];
    const minLength = Math.min(lista1.length, lista2.length);
    for (let i = 0; i < minLength; i++) {
        combinada.push(lista1[i]);
        combinada.push(lista2[i]);
    }
    return combinada;
}
//def contar_frecuencia
function contar_frecuencia(lista) {
    let conteo = {}; 
    for (const item of lista) {
        if (conteo[item]) {
            conteo[item] += 1;
        } else {
            conteo[item] = 1;
        }
    }
    return conteo;
}
