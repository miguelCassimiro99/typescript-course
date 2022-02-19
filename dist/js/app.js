import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 5, 105);
console.log(negociacao);

console.log('Volume ' + negociacao.volume);