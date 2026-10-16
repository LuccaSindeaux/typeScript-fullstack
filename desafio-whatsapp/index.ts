import { Contatinho } from "./Contatinho.js";
import { Whatsapp } from "./Whatsapp.js";
import { MsgTexto } from "./MsgTexto.js";
import { MsgAudio } from "./MsgAudio.js";
import { MsgFoto } from "./MsgFoto.js";

const zap = new Whatsapp();

const alice = new Contatinho("Alice", "99999-1111");
const bob = new Contatinho("Bob", "99999-2222");

zap.adicionarContato(alice);
zap.adicionarContato(bob);

zap.adicionarMensagem(new MsgTexto(alice, "10:00", "Olá Bob!", 8));
zap.adicionarMensagem(new MsgAudio(bob, "10:05", "audio.mp3", 15));
zap.adicionarMensagem(new MsgFoto(alice, "10:10", "foto.jpg", 250));

zap.listarContatos();
zap.listarMensagens();
