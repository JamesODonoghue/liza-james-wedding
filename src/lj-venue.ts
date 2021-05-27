import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-venue')
export class Venue extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div>
                <div class="text-3xl mb-4 text-secondary-800">
                    Living History Farms
                </div>
                <p class="font-body max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos velit praesentium aliquid ipsam blanditiis fugit
                    optio, nam aspernatur veritatis aut enim eos quae tempora
                    temporibus earum repellendus sint maxime perspiciatis!
                </p>
            </div>
        `;
    }
}
