import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { customElement, property, query, state } from 'lit/decorators.js';
import './venue/venue.js';
import './rsvp/rsvp.js';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';

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

        window.addEventListener(
            'vaadin-router-location-changed',
            this.handleLocationChanged
        );

        const params = new URLSearchParams(window.location.search);
        const rsvpParam = params.get('rsvp');
        this.isRsvp = !!rsvpParam;

        this.url =
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=MW5qMjFyanVwMnFldHNqaTN1NjVoYjlmc2ogam9kb25vZ2gxQG0&tmsrc=jodonogh1%40gmail.com';
    }

    firstUpdated() {
        // this.router = new Router(this.outlet);
        // this.router.setRoutes([
        //     {
        //         path: '/',
        //         name: 'home',
        //         component: 'lj-venue',
        //     },
        //     {
        //         path: '/rsvp',
        //         name: 'rsvp',
        //         component: 'lj-rsvp',
        //     },
        // ]);
    }

    handleLocationChanged = () => {
        this.activeItem = this.router?.location.route?.name as string;
    };

    render() {
        return html`
            <div class="font-body">
                <div class="h-screen">
                    <div
                        class="max-w-3xl mx-auto px-8 sm:pt-36 pt-16 text-center"
                    >
                        <div class="flex flex-col">
                            <div
                                class="text-4xl sm:text-8xl font-bold mb-16 text-center"
                            >
                                Liza & James
                            </div>
                            <img
                                class="w-full rounded-lg"
                                src="src/assets/liza_james_2.jpeg"
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

                            <div class="flex mt-8 justify-center">
                                <a
                                    href=${this.url}
                                    class="tracking-widest uppercase font-bold bg-primary-600  text-primary-50 hover:bg-primary-800 px-12 py-4 rounded w-full text-center transition sm:max-w-max"
                                >
                                    Add to calendar
                                </a>
                            </div>
                        </div>
                        <!-- <mwc-tab-bar>
                            <mwc-tab label="Home"></mwc-tab>
                            <mwc-tab label="Rsvp"></mwc-tab>
                        </mwc-tab-bar> -->
                    </div>

                    <!-- <div id="outlet"></div> -->

                    <lj-rsvp></lj-rsvp>
                    <lj-venue></lj-venue>
                </div>
            </div>
        `;
    }
}
