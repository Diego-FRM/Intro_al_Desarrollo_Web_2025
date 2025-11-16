# 📘 README – Investigación sobre métodos de Jest

## Introducción

Esta carpeta contiene archivos con funciones utilizadas con `expect()` en la biblioteca **Jest**, una herramienta útil para realizar pruebas unitarias en JavaScript.  
Cada método permite validar comportamientos específicos en nuestras funciones tales como igualdad, errores y valores especiales.

Los métodos investigados son:

- `.toEqual()`
- `.toBeTruthy()`
- `.toBeFalsy()`
- `.toBeNull()`
- `.toBeUndefined()`
- `.toThrow()`
- `.toStrictEqual()`

---

## 1. `.toEqual()`

Este método compara que dos valores tengan el **mismo contenido**., no requiere que las referencias de memoria sean idénticas.  
Es útil para comparar **objetos y arreglos**, ya que solo revisa que las propiedades y valores coincidan.

### **Ejemplo:**
```js
expect({ nombre: "Diego", edad: 20 })
  .toEqual({ nombre: "Diego", edad: 20 });
```

---

## 2. `.toBeTruthy()`

Verifica que un valor sea **truthy**, es decir, que JavaScript lo considere verdadero cuando se evalúa como booleano.

Ejemplos de valores truthy:  
`"hola"`, `1`, `-5`, `{}`, `[]`, `"false"`

### **Ejemplo:**
```js
expect("hola").toBeTruthy();
```

---

## 3. `.toBeFalsy()`

Verifica que un valor sea **falsy**, es decir, que JavaScript lo considere falso.  
Los valores falsy son:  
`0`, `""`, `null`, `undefined`, `NaN`, `false`

### **Ejemplo:**
```js
expect(0).toBeFalsy();
```

---

## 4. `.toBeNull()`

Comprueba que el valor sea **exactamente** `null`.

### **Ejemplo:**
```js
expect(null).toBeNull();
```

---

## 5. `.toBeUndefined()`

Comprueba que el valor sea exactamente **undefined**.

### **Ejemplo:**
```js
let x;
expect(x).toBeUndefined();
```

---

## 6. `.toThrow()`

Valida que una función **lance un error** al ejecutarse.  
Útil para manejar casos donde las funciones deberían fallar, como división entre cero.  
Con este método **no es necesario usar try/catch en las pruebas**.

### **Ejemplo:**
```js
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

expect(() => dividir(10, 0))
  .toThrow("No se puede dividir entre 0");
```

---

## 7. `.toStrictEqual()`

Es una versión más estricta de `.toEqual()`.  
Mientras `.toEqual()` compara solo el contenido, `.toStrictEqual()` también compara:

- La **estructura exacta**  
- Si una propiedad existe aunque su valor sea `undefined`  
- El **prototipo** del objeto (por ejemplo objetos literales vs instancias de clase)
- Arreglos con “huecos” vs arreglos con `undefined`

### **Ejemplo:**
```js
expect({ x: 1, y: undefined })
  .not.toStrictEqual({ x: 1 });
```
