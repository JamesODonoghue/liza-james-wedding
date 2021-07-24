import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import './lj-home.js';
import './lj-venue.js';
import './lj-hotel.js';

@customElement('liza-james-wedding')
export class LizaJamesWedding extends LitElement {
    @property({ type: Object }) router!: Router;

    @property({ type: String }) title = 'My app';

    @property({ type: String }) activeItem = 'ceremony';

    @query('#outlet') outlet!: HTMLElement;

    @property() url = '';

    static styles = css`
        :host {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: calc(10px + 2vmin);
            color: #1a2b42;
            max-width: 960px;
            margin: 0 auto;
            text-align: center;
            background-color: var(--liza-james-wedding-background-color);
        }

        main {
            flex-grow: 1;
        }

        .logo > svg {
            margin-top: 36px;
            animation: app-logo-spin infinite 20s linear;
        }

        @keyframes app-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .app-footer {
            font-size: calc(12px + 0.5vmin);
            align-items: center;
        }

        .app-footer a {
            margin-left: 5px;
        }
    `;

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

        // const baseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';
        // const eventTitle = 'Liza and James Iowa Wedding';
        // const location =
        //     'Living History Farms, 11121 Hickman Rd, Urbandale, IA 50322, USA';
        // const dates = '20210625/20210626Z';

        // this.url = `${baseUrl}?text=${eventTitle}&dates=${dates}&location=${location}`;

        this.url =
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=MW5qMjFyanVwMnFldHNqaTN1NjVoYjlmc2ogam9kb25vZ2gxQG0&tmsrc=jodonogh1%40gmail.com';
    }

    firstUpdated() {
        this.router = new Router(this.outlet);

        this.router.setRoutes([
            {
                path: '/',
                name: 'ceremony',
                component: 'lj-venue',
            },
            {
                path: '/ceremony',
                name: 'ceremony',
                component: 'lj-venue',
            },
            {
                path: '/hotels',
                name: 'hotels',
                component: 'lj-hotel',
            },
        ]);
    }

    handleLocationChanged = () => {
        this.activeItem = this.router?.location.route?.name as string;
    };

    render() {
        return html`
            <div class="font-body">
                <div>
                    <!-- <div class="mt-16 mb-16 text-center font-semibold">
                        <h1 class="text-5xl sm:text-7xl text-primary-800 mb-4">
                            Liza & James
                        </h1>
                        <div class="text-xl text-secondary-900">
                            <div class="font-semibold mb-2">June 25, 2022</div>

                            <div class="font-extralight">
                                <div>Living History Farms</div>
                                <div>Urbandale, Iowa</div>
                            </div>
                        </div>
                    </div> -->

                    <div class="h-screen">
                        <div class="max-w-3xl mx-auto px-8 sm:pt-36 pt-16">
                            <!-- <h1 class="text-5xl sm:text-7xl text-primary-800 mb-4">
                            Liza & James
                        </h1> -->
                            <div class="flex flex-col">
                                <div
                                    class="text-5xl sm:text-8xl font-bold mb-16"
                                >
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
                    </div>
                    <div id="outlet"></div>
                </div>
            </div>
        `;
    }
}
