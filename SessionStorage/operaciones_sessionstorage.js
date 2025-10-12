function __toJSON(value) {
    try { return JSON.stringify(value); }
    catch { throw new Error('No se pudo serializar el valor (usa datos JSON-compatibles).'); }
}

/* Inserción*/
function ssSet(key, value) {
    sessionStorage.setItem(key, __toJSON(value));
    return true;
}

/* Consultar existencia*/
function ssHas(key) {
    return sessionStorage.getItem(key) !== null;
}

/* Eliminación por clave */
function ssRemove(key) {
    sessionStorage.removeItem(key);
    return true;
}

/**
 * Borra todas las entradas de sessionStorage cuyo nombre de clave
 * comience con `${prefix}:`. Devuelve cuántas claves eliminó.
 */
function ssClearByPrefix(prefix) {
    if (typeof prefix !== 'string' || prefix === '') {
        throw new Error('Debes proporcionar un prefix no vacío.');
    }

    const toRemove = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        if (k && k.startsWith(prefix + ':')) {
            toRemove.push(k);
        }
    }
    for (const k of toRemove) {
        sessionStorage.removeItem(k);
    }
    return toRemove.length;
}

/* Borrado total */
function ssClearAll() {
    sessionStorage.clear();
}
