import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        console.log(negociacao);
        this.limpaForm();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const value = parseFloat(this.inputValor.value);
        const quantity = parseInt(this.inputQuantidade.value);
        return new Negociacao(date, value, quantity);
    }
    limpaForm() {
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.00';
        this.inputData.value = '';
        this.inputData.focus();
    }
}
