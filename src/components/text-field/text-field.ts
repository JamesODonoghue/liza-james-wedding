import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('lj-textfield')
export class TextField extends LitElement {
    @property() inputType: any = 'text';

    @property() name: any = 'text';

    @property() value = '';

    @property() placeholder = '';

    @property({ type: Boolean }) required = false;

    @property({ type: Boolean }) disabled = false;

    @property({ type: Boolean }) invalid = false;

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <input
                class="bg-neutral-50 border-neutral-300 border-2 rounded w-full leading-8 disabled:opacity-30 invalid:required:border-red-500 invalid:border-error-600"
                type=${this.inputType}
                name=${this.name}
                placeholder=${this.placeholder}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?invalid=${this.invalid}
                .value=${this.value}
            />
        `;
    }
}
