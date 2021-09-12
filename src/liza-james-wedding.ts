import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import './venue/venue.js';
import './rsvp/rsvp.js';

@customElement('liza-james-wedding')
export class LizaJamesWedding extends LitElement {
    @property({ type: String }) title = 'My app';

    @property({ type: String }) activeItem = 'ceremony';

    @query('#outlet') outlet!: HTMLElement;

    @property() url = '';

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        // eslint-disable-next-line wc/guard-super-call
        super.connectedCallback();
        this.url =
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=MW5qMjFyanVwMnFldHNqaTN1NjVoYjlmc2ogam9kb25vZ2gxQG0&tmsrc=jodonogh1%40gmail.com';
    }

    render() {
        return html`
            <div class="font-body">
                <div class="h-screen">
                    <div class="max-w-3xl mx-auto px-8 sm:pt-36 pt-16">
                        <div class="flex flex-col">
                            <div class="text-5xl sm:text-8xl font-bold mb-16">
                                Liza & James
                            </div>
                            <img
                                class="w-full rounded-lg"
                                src="src/assets/liza_james.jpeg"
                                alt="this slowpoke moves"
                                width="250"
                            />

                            <div
                                class="mt-24 dark:text-neutral-100 text-xl leading-relaxed"
                            >
                                <div class="font-bold text-3xl mb-4">
                                    June 25, 2022
                                </div>
                                <div>Living History Farms</div>
                                <div>Urbandale, Iowa</div>
                            </div>

                            <div class="flex mt-8">
                                <a
                                    href=${this.url}
                                    class="tracking-widest uppercase font-bold bg-primary-600  text-primary-50 hover:bg-primary-800 px-12 py-4 rounded w-full text-center transition sm:max-w-max"
                                >
                                    Add to calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    <lj-rsvp></lj-rsvp>
                    <lj-venue></lj-venue>
                </div>
            </div>
        `;
    }
}
