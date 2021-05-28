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

    @property({ type: String }) activeItem = 'home';

    @query('#outlet') outlet!: HTMLElement;

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
    }

    firstUpdated() {
        this.router = new Router(this.outlet);

        this.router.setRoutes([
            {
                path: '/',
                name: 'home',
                component: 'lj-home',
            },
            {
                path: '/venue',
                name: 'venue',
                component: 'lj-venue',
            },
            {
                path: '/hotel',
                name: 'hotel',
                component: 'lj-hotel',
            },
        ]);
    }

    handleLocationChanged = () => {
        this.activeItem = this.router?.location.route?.name as string;
    };

    render() {
        return html`
            <div class="font-display">
                <div class="max-w-6xl mx-auto p-4">
                    <div class="mt-16 mb-16 text-center font-semibold">
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
                    </div>
                    <div id="outlet"></div>
                </div>
            </div>
        `;
    }
}
