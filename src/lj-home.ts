import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-home')
export class Home extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div
                class="relative h-0 aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-2"
            >
                <img
                    class="rounded-lg object-cover"
                    src="./src/assets/liza_james.jpeg"
                    alt=""
                />
            </div>
        `;
    }
}
