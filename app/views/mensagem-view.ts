import {View} from "./view.js";
import {Negociacoes} from "../models/negociacoes";

export class MensagemView extends View<string>{

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}
