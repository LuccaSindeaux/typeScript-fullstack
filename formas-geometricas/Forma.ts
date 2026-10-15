abstract class Forma {
    constructor(public nome: string) {}

    abstract CalcularArea(): number;
}

export { Forma };