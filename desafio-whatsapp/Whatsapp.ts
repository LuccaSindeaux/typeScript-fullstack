import { Contatinho } from "./Contatinho.js";
import { Mensagem } from "./Mensagem.js";

class Whatsapp {
    private contatos: Contatinho[] = [];
    private mensagens: Mensagem[] = [];

    adicionarContato(contato: Contatinho): void {
        this.contatos.push(contato);
    }

    adicionarMensagem(mensagem: Mensagem): void {
        this.mensagens.push(mensagem);
    }

    listarContatos(): void {
        console.log("=== Contatos ===");
        this.contatos.forEach((c, i) => {
            console.log(`${i + 1}. ${c.toString()}`);
        });
    }

    listarMensagens(): void {
        console.log("=== Mensagens ===");
        this.mensagens.forEach((m) => {
            m.toString();
        });
    }
}

export { Whatsapp };
