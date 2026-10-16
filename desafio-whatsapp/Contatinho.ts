class Contatinho {
    constructor(private nome: string, private celular: string) {}

    getNome(): string {
        return this.nome;
    }

    getCelular(): string {
        return this.celular;
    }

    toString(): string {
        return `${this.nome} (${this.celular})`;
    }
}

export { Contatinho };
