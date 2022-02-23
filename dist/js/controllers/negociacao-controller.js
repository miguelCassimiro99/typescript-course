import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputValor.value, this.inputQuantidade.value);
        if (this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Negociações são aceitas apenas em dias úteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() === DiasDaSemana.SABADO || data.getDay() === DiasDaSemana.DOMINGO;
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
