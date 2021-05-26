import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-venue')
export class Venue extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html` <div>Hello from venue</div> `;
    }
}
