export class Negociacoes {
    constructor() {
        this.negociaocoes = [];
    }
    adiciona(negociacao) {
        this.negociaocoes.push(negociacao);
    }
    lista() {
        return this.negociaocoes;
    }
}
