import { Mensagem } from "./Mensagem.js";
import { Contatinho } from "./Contatinho.js";

class MsgTexto extends Mensagem {
    constructor(
        destinatario: Contatinho,
        horaEnvio: string,
        conteudo: string,
        private numChar: number
    ) {
        super(destinatario, horaEnvio, conteudo);
    }

    getNumChar(): number {
        return this.numChar;
    }

    toString(): void {
        console.log(
            `[Texto ${this.getHoraEnvio()}] para ${this.getDestinatario().toString()}: ${this.getConteudo()} (${this.getNumChar()} chars)`
        );
    }
}

export { MsgTexto };
