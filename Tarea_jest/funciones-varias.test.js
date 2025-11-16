const { crearUsuario, esPar, obtenerNull, obtenerUndefined, crearArreglo} = require("./funciones-varias.js");

// .toEqual()
test("Debe crear un usuario y comparralo con otro correctamente", () => {
    expect(crearUsuario("Diego", 25)).toEqual({ nombre: "Diego", edad: 25 });
});

// .toBeTruthy() y .toBeFalsy()
test("Debe regresar un valor truthy cuando el numero es par", () => {
    expect(esPar(4)).toBeTruthy();
});
test("Debe regresar un valor falsy cuando el numero NO es par", () => {
    expect(esPar(7)).toBeFalsy();
});

// .toBeNull()
test("Debe regresar null", () => {
    expect(obtenerNull()).toBeNull();
});

// .toBeUndefined()
test("Debe regresar undefined", () => {
    expect(obtenerUndefined()).toBeUndefined();
});

// .toEstrictEqual()
test("Debe crear un arreglo y comparralo con otro correctamente", () => {
    expect(crearArreglo(1, 2, 3)).toStrictEqual([1, 2, 3]);
});
