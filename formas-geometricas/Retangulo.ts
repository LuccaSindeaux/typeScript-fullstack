import { Forma } from "./Forma";

class Retangulo extends Forma {
    constructor(public base: number, public altura: number) {
        super("Retângulo");
    }

    // Área = base * altura
    CalcularArea(): number {
        return this.base * this.altura;
    }
}

export { Retangulo };