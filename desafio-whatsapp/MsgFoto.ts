import { Mensagem } from "./Mensagem.js";
import { Contatinho } from "./Contatinho.js";

class MsgFoto extends Mensagem {
    constructor(
        destinatario: Contatinho,
        horaEnvio: string,
        conteudo: string,
        private tamanho: number
    ) {
        super(destinatario, horaEnvio, conteudo);
    }

    getTamanho(): number {
        return this.tamanho;
    }

    toString(): void {
        console.log(
            `[Foto ${this.getHoraEnvio()}] para ${this.getDestinatario().toString()}: ${this.getConteudo()} (${this.getTamanho()}KB)`
        );
    }
}

export { MsgFoto };
