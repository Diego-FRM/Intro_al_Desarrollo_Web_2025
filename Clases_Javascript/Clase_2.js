class Coche {
    marca;
    modelo;
    anio;
    combustible = 0;

    #kilometraje = 0;

    constructor(marca, modelo, anio, combustibleInicial = 0) {
        if (!marca || !modelo || !anio) throw new Error("Faltan datos del coche");
        this.marca = marca;
        this.modelo = modelo;
        this.anio = Number(anio);
        this.combustible = Number(combustibleInicial);
    }

    conducir(km, consumoPor100km = 7) {
        const litros = (km * consumoPor100km) / 100;
        if (km <= 0) throw new Error("Km inválidos");
        if(litros > this.combustible) throw new Error("Combustible insuficiente");
        this.#kilometraje += km;
        this.combustible -= litros;
        return this.#kilometraje;
    }

    ponerGasolina(litros) {
        if (litros <= 0) throw new Error("Litros inválidos");
        this.combustible += litros;
        return this.combustible;
    }

    necesitaServicio() {
        return this.#kilometraje >= 10000;
    }

    toString() {
        return { 'La marca del auto': this.marca, ',el modelo': this.modelo, ',el año': this.anio, ',el kilometraje': this.#kilometraje, 'y el combustible': this.combustible.toFixed(1) + ' L' };
    }
}