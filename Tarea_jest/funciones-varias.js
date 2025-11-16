// probar .toEqual()
function crearUsuario(nombre, edad) {
    return { nombre, edad };
}
// probar .toBeTruthy() y .toBeFalsy()
function esPar(numero) {
    return numero % 2 === 0;
}
// probar .toBeNull()
function obtenerNull(){
    return null;
} 
// probar .toBeUndefined()
function obtenerUndefined(){
    return undefined;
}
// probar .toEstrictEqual()
function crearArreglo(a, b, c) {
    return [a, b, c];
}
module.exports = { crearUsuario, esPar, obtenerNull, obtenerUndefined, crearArreglo};