import {Negociacao} from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputValor = document.querySelector('#valor');
    this.inputQuantidade = document.querySelector('#quantidade');
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();

    console.log(negociacao);

    this.limpaForm();
  }

  criaNegociacao(): Negociacao {
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

  limpaForm(): void {
    this.inputQuantidade.value = '1';
    this.inputValor.value = '0.00';
    this.inputData.value = '';
    this.inputData.focus();
  }
}
