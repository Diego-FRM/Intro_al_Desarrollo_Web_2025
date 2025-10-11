class CuentaBancaria {
    numero;
    titular;
    moneda = "MXN";
    #saldo = 0;

    constructor(numero, titular, saldoInicial = 0, moneda = "MXN") {
        if (!numero || !titular) throw new Error("Faltan datos de la cuenta");
        if (saldoInicial < 0) throw new Error("Saldo inicial inválido");
        this.numero = numero;
        this.titular = titular;
        this.#saldo = Number(saldoInicial);
        this.moneda = moneda;
    }

    depositar(monto) {
        if (monto <= 0) throw new Error("Monto inválido");
        this.#saldo += monto;
        return this.#saldo;
    }

    retirar(monto) {
        if (monto <= 0) throw new Error("Monto inválido");
        if (monto > this.#saldo) throw new Error("Fondos insuficientes");
        this.#saldo -= monto;
        return this.#saldo;
    }

    transferir(monto, destino) {
        if (!(destino instanceof CuentaBancaria)) {
            throw new Error("Cuenta destino inválida");
        }
        this.retirar(monto);
        destino.depositar(monto);
        return { origen: this.#saldo, destino: destino.#saldo };
    }
}