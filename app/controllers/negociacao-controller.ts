import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesView} from "../views/negociacoes-view.js";
import {MensagemView} from "../views/mensagem-view.js";
import {DiasDaSemana} from "../enums/dias-da-semana.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private negociacoes:Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputValor = document.querySelector('#valor');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
        this.inputData.value,
        this.inputValor.value,
        this.inputQuantidade.value
    )

    if (this.ehDiaUtil(negociacao.data)) {
      this.mensagemView
          .update('Negociações são aceitas apenas em dias úteis');
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limpaForm();
    this.atualizaView();
  }

  private ehDiaUtil(data: Date): Boolean {
    return data.getDay() === DiasDaSemana.SABADO || data.getDay() === DiasDaSemana.DOMINGO;
  }

  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const value = parseFloat(this.inputValor.value);
    const quantity = parseInt(this.inputQuantidade.value);

    return new Negociacao(
        date,
        value,
        quantity
    );
  }

  private limpaForm(): void {
    this.inputQuantidade.value = '1';
    this.inputValor.value = '0.00';
    this.inputData.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }
}
