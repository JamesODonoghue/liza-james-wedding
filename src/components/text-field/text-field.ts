import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('lj-textfield')
export class TextField extends LitElement {
    @property() inputType: any = 'text';

    @property() name: any = 'text';

    @property() value = '';

    @property({ type: Boolean }) required = false;

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <input
                class="bg-neutral-50 border-neutral-300 rounded w-full leading-8"
                type=${this.inputType}
                name=${this.name}
                ?required=${this.required}
                .value=${this.value}
            />
        `;
    }
}
