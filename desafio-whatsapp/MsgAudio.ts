import { Mensagem } from "./Mensagem.js";
import { Contatinho } from "./Contatinho.js";

class MsgAudio extends Mensagem {
    constructor(
        destinatario: Contatinho,
        horaEnvio: string,
        conteudo: string,
        private duracao: number
    ) {
        super(destinatario, horaEnvio, conteudo);
    }

    getDuracao(): number {
        return this.duracao;
    }

    toString(): void {
        console.log(
            `[Audio ${this.getHoraEnvio()}] para ${this.getDestinatario().toString()}: ${this.getConteudo()} (${this.getDuracao()}s)`
        );
    }
}

export { MsgAudio };
