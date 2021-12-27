import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { customElement, property, query, state } from 'lit/decorators.js';
import './venue/venue.js';
import './rsvp/rsvp.js';

@customElement('liza-james-wedding')
export class LizaJamesWedding extends LitElement {
    @property({ type: Object }) router!: Router;

    @property({ type: String }) title = 'My app';

    @property({ type: String }) activeItem = 'ceremony';

    @query('#outlet') outlet!: HTMLElement;

    @property() url = '';

    @state() isRsvp = false;

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        // eslint-disable-next-line wc/guard-super-call
        super.connectedCallback();

        // const params = new URLSearchParams(window.location.search);
        // const rsvpParam = params.get('rsvp');
        this.isRsvp = true;

        this.url =
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=MW5qMjFyanVwMnFldHNqaTN1NjVoYjlmc2ogam9kb25vZ2gxQG0&tmsrc=jodonogh1%40gmail.com';
    }

    render() {
        return html`
            <div class="font-body">
                <div
                    class="p-8 bg-primary-800 text-xl text-center text-primary-50"
                >
                    More details coming soon!
                </div>
                <div class="h-screen mx-auto px-8 flex items-center">
                    <div class="flex flex-col items-center">
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
                            <div
                                class="max-w-4xl flex flex-col justify-center mx-auto"
                            >
                                <div
                                    class="text-4xl sm:text-8xl font-semibold mb-4 tracking-tight"
                                >
                                    Liza & James
                                </div>
                                <div class="font-bold text-3xl mb-4">
                                    June 25, 2022
                                </div>
                                <div>Living History Farms</div>
                                <div>Urbandale, Iowa</div>
                                <div class="flex mt-8">
                                    <a
                                        href=${this.url}
                                        class="tracking-widest uppercase font-bold bg-primary-600  text-primary-50 hover:bg-primary-800 px-12 py-4 rounded w-full text-center transition sm:max-w-max"
                                    >
                                        Add to calendar
                                    </a>
                                </div>
                            </div>
                            <div class="max-w-4xl">
                                <img
                                    class="rounded-lg"
                                    src="src/assets/liza_james_2.jpeg"
                                    alt="this slowpoke moves"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                ${this.isRsvp ? html` <lj-rsvp></lj-rsvp> ` : ''}
                <lj-venue></lj-venue>
            </div>
        `;
    }
}
