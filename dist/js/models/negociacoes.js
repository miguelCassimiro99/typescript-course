export class Negociacoes {
    constructor() {
        // forma simplificada:
        // private negociaocoes: Negociacao[] = [];
        this.negociaocoes = [];
    }
    adiciona(negociacao) {
        this.negociaocoes.push(negociacao);
    }
    // lista(): readonly Negociacao[] {}
    lista() {
        return this.negociaocoes;
    }
}
