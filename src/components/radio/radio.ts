import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lj-radio')
export class Radio extends LitElement {
    @property() name = '';

    @property() inputId = '';

    @property() label = '';

    @property() value = '';

    @property({ type: Boolean }) checked = false;

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="flex items-center">
                <input
                    id=${this.inputId}
                    class="mr-2 cursor-pointer"
                    type="radio"
                    name=${this.name}
                    .value=${this.value}
                    ?checked=${this.checked}
                />
                <label class="cursor-pointer" for="${this.inputId}"
                    >${this.label}</label
                >
            </div>
        `;
    }
}
