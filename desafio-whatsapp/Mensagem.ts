import { Contatinho } from "./Contatinho.js";

abstract class Mensagem {
    constructor(
        private destinatario: Contatinho,
        private horaEnvio: string,
        private conteudo: string
    ) {}

    getDestinatario(): Contatinho {
        return this.destinatario;
    }

    getHoraEnvio(): string {
        return this.horaEnvio;
    }

    getConteudo(): string {
        return this.conteudo;
    }

    abstract toString(): void;
}

export { Mensagem };
