import {Negociacao} from "./negociacao.js";

export class Negociacoes {
    private negociaocoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociaocoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociaocoes;
    }
}
