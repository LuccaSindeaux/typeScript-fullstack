import { Forma } from "./Forma";

class Triangulo extends Forma {
    constructor(public base: number, public altura: number) {
        super("Triângulo Retângulo");
    }

    // Área = (base * altura) / 2
    CalcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

export { Triangulo };