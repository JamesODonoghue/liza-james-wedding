import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-hotel')
export class Hotel extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html` <div>Hello from hotel</div> `;
    }
}
