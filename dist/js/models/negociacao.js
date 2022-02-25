export class Negociacao {
    constructor(_data, _valor, _quantidade) {
        this._data = _data;
        this._valor = _valor;
        this._quantidade = _quantidade;
    }
    static criaDe(dataString, valorString, quantidadeString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const value = parseFloat(valorString);
        const quantity = parseInt(quantidadeString);
        return new Negociacao(date, value, quantity);
    }
    get data() {
        const date = new Date(this._data.getTime());
        return date;
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
