import {Negociacao} from "./negociacao.js";

export class Negociacoes {
    // forma simplificada:
    // private negociaocoes: Negociacao[] = [];
    private negociaocoes: Array<Negociacao> = [];


    public adiciona(negociacao: Negociacao) {
        this.negociaocoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] {}
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociaocoes;
    }
}
