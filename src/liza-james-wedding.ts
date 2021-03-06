import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { customElement, property, query, state } from 'lit/decorators.js';
import './venue/venue.js';
import './rsvp/rsvp.js';
import './eat/eat.js';

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
                <div class="h-screen mx-auto px-8 flex items-center ">
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
                                <div class="mb-8">Urbandale, Iowa</div>
                                <div>
                                    Ceremony starts at 4:30pm at the Church of
                                    the Land
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
                <lj-eat></lj-eat>
                <div class="max-w-3xl mx-auto px-8 pb-64">
                    <div
                        class="sm:ext-4xl text-3xl uppercase font-semibold tracking-widest mb-8"
                    >
                        What to buy us
                    </div>
                    <a
                        href="https://www.blueprintregistry.com/registry/james-odonoghue-wedding-registry-6-25-2022"
                        class="flex align-center text-2xl font-semibold mb-8 hover:text-primary-500"
                    >
                        <div class="mr-2">Registry</div>
                        <div
                            class="flex items-center material-icons material-icons-outlined"
                        >
                            arrow_forward
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
}
