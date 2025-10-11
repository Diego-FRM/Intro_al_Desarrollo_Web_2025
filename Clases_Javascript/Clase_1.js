class Perro {
    nombre;
    raza;
    edad;
    #vacunas = [];

    constructor(nombre, raza, edad = 0) {
        if (!nombre) throw new Error("El nombre es obligatorio");
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    ladrar() {
        console.log("Guau Guau, soy " + this.nombre);
    }
    aplicarVacuna(nombreVacuna) {
        if (!nombreVacuna) throw new Error("El nombre de la vacuna es obligatorio");
        this.#vacunas.push({ nombre: nombreVacuna, fecha: new Date() });
        return this.#vacunas;
    }
    cumplirAnios() {
        this.edad++;
        return this.edad;
    }
    toString() {
        return { 'El nombre del perro': this.nombre, ',la raza': this.raza, 'y su edad': this.edad };
    }
}