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
                    class="mr-2 cursor-pointer peer opacity-0 absolute"
                    type="radio"
                    name=${this.name}
                    .value=${this.value}
                    ?checked=${this.checked}
                />
                <label
                    class="flex items-center justify-center cursor-pointer border-2 border-neutral-300 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-900 p-4 w-full text-center rounded peer-focus:ring-2 ring-blue-200"
                    for="${this.inputId}"
                >
                    ${this.label}
                    ${this.checked
                        ? html`
                              <span
                                  class="material-icons group ml-4 text-blue-600"
                              >
                                  check_circle
                              </span>
                          `
                        : ''}
                </label>
            </div>
        `;
    }
}
