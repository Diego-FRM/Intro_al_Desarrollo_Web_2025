# SessionStorage — Descripción y Comparación con localStorage

## ¿Qué es `sessionStorage`?
`sessionStorage` forma parte de la **Web Storage API** del navegador. Permite almacenar datos en pares **clave–valor** dentro del navegador del usuario.  
Su característica principal es que **solo persiste mientras la pestaña o ventana del navegador esté abierta**.  
Una vez que se cierra la pestaña, toda la información almacenada en `sessionStorage` se elimina automáticamente.

---

## Propiedades:
- **Alcance:** Los datos son accesibles únicamente desde la pestaña o ventana donde fueron creados y dentro del mismo origen (protocolo + dominio + puerto).
- **Persistencia:** Los datos persisten si la página se recarga, pero se eliminan al cerrar la pestaña.
- **Capacidad:** Aproximadamente entre **5 y 10 MB** dependiendo del navegador.
- **API sincrónica:** Usa métodos como `setItem()`, `getItem()`, `removeItem()`, `clear()`, y `key()`.
- **Solo admite strings:** Los valores almacenados deben ser cadenas. Para guardar objetos se usan `JSON.stringify()` y `JSON.parse()`.
- **Eventos:** No propaga eventos de cambio entre pestañas, a diferencia de `localStorage`.

---

## Estructura
`sessionStorage` guarda datos en forma de pares **clave–valor**, ambos como cadenas de texto.

```js
// Ejemplo de uso
sessionStorage.setItem("nombre", "Diego");
console.log(sessionStorage.getItem("nombre")); // "Diego"

// Almacenar un objeto
const usuario = { id: 1, nombre: "Ana" };
sessionStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperarlo
const data = JSON.parse(sessionStorage.getItem("usuario"));
console.log(data.nombre); // "Ana"
```
---

## Requerimientos
- El sitio debe ejecutarse en un **navegador moderno** con soporte de la Web Storage API.
- Se debe respetar el **mismo origen** (protocolo, dominio y puerto) para acceder a los datos.
- Evitar almacenar **información sensible**, ya que puede ser accesible por scripts si hay vulnerabilidades XSS.
- Manejar posibles errores de **espacio insuficiente** (`QuotaExceededError`).

---

## Diferencias entre `sessionStorage` y `localStorage`

- **Duración de los datos** 
    `sessionStorage`: Hasta que se cierre la pestaña o ventana
    `localStorage`: Permanece hasta que se borre manualmente
- **Ámbito**
    `sessionStorage`: Por pestaña y por origen
    `localStorage`: Por origen, compartido entre pestañas
- **Compartición entre pestañas**
    `sessionStorage`: No se comparte
    `localStorage`: Sí, se comparte entre pestañas del mismo dominio
**Uso típico**
    `sessionStorage`: Estados temporales, formularios en progreso, sesiones cortas
    `localStorage`: Preferencias de usuario, configuraciones persistentes

---

En resumen, `sessionStorage` y `localStorage` usan **la misma API**, pero difieren en **duración y alcance**:  
- `sessionStorage` → temporal, por pestaña.  
- `localStorage` → persistente, compartido entre pestañas.
