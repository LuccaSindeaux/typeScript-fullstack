import { Forma } from "./Forma";

class Quadrado extends Forma {
    constructor(public lado: number) {
        super("Quadrado");
    }

    // Área = lado²
    CalcularArea(): number {
        return this.lado ** 2;
    }
}

export { Quadrado };