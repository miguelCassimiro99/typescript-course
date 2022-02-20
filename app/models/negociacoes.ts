import {Negociacao} from "./negociacao.js";

export class Negociacoes {
    // forma simplificada:
    // private negociaocoes: Negociacao[] = [];
    private negociaocoes: Array<Negociacao> = [];


    adiciona(negociacao: Negociacao) {
        this.negociaocoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] {}
    lista(): ReadonlyArray<Negociacao> {
        return this.negociaocoes;
    }
}
