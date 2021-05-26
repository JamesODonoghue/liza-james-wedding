import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import './lj-home.js';
import './lj-venue.js';
import './lj-hotel.js';

@customElement('liza-james-wedding')
export class LizaJamesWedding extends LitElement {
    @property({ type: String }) title = 'My app';

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

    firstUpdated() {
        const router = new Router(this.outlet);

        router.setRoutes([
            {
                path: '/',
                component: 'lj-home',
            },
            {
                path: '/venue',
                component: 'lj-venue',
            },
            {
                path: '/hotel',
                component: 'lj-hotel',
            },
        ]);
    }

    render() {
        return html`
            <div class="font-display">
                <div class="max-w-5xl mx-auto p-8">
                    <div class="m-28 text-center font-bold">
                        <h1 class="text-8xl text-primary-800 mb-8">
                            Liza & James
                        </h1>
                        <div class="text-3xl text-neutral-800">
                            <div>June 25, 2022</div>
                            <div>Living History Farms, Iowa</div>
                        </div>
                    </div>
                    <div class="grid grid-flow-col text-center mb-28 text-xl">
                        <div>
                            <a class="hover:text-primary-600" href="/">Home</a>
                        </div>
                        <div>
                            <a class="hover:text-primary-600" href="/venue"
                                >Venue</a
                            >
                        </div>
                        <div>
                            <a class="hover:text-primary-600" href="/hotel"
                                >Hotel</a
                            >
                        </div>
                    </div>

                    <div id="outlet"></div>
                </div>
            </div>
        `;
    }
}
