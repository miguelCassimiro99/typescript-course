export class Negociacao {
    constructor(_data, _valor, _quantidade) {
        this._data = _data;
        this._valor = _valor;
        this._quantidade = _quantidade;
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
/* Modelagem simplificada com atributos publicos e readonly
* os atributos são públicos mas não é possível alterá-los
*
 constructor(
      public readonly data: Date,
      public readonly valor: number,
      public readonly quantidade: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }
*/
