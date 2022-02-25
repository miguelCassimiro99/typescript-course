export class Negociacao {

  constructor(
      private _data: Date,
      private _valor: number,
      private _quantidade: number
  ) {}

  // métodos estáticos precisam ser public
  public static criaDe(dataString: string, valorString: string, quantidadeString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const value = parseFloat(valorString);
    const quantity = parseInt(quantidadeString);

    return new Negociacao(
        date,
        value,
        quantity
    );
  }

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }

  get valor(): number {
    return this._valor;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get volume(): number {
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

