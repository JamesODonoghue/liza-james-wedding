import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-hotel')
export class Hotel extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="mb-16 max-w-xl">
                <div class="text-3xl mb-4 text-secondary-800">Hotel Renovo</div>
                <p class="font-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Error, perspiciatis voluptatem magnam quis explicabo
                    accusamus nihil sunt perferendis autem totam placeat sed, et
                    suscipit id corporis eos. Praesentium, odio assumenda!
                </p>
            </div>
            <div class="max-w-xl">
                <div class="text-3xl mb-4 text-secondary-800">
                    Hotel Reville
                </div>
            </div>
        `;
    }
}
