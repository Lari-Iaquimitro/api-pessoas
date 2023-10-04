import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa(`João`, `111111111-11`, new Date(2000, 9, 15), `0000-0000`, `Rua Número 1`, 170, 70);

pessoa.falar();
pessoa.falarFrase("Olá Mundo!");

pessoa.andar();
pessoa.andarKm(5);

pessoa.comer();
pessoa.comerPrato("Morango");

let pessoa1 = pessoa.mostraPessoa();
console.log(pessoa1);
