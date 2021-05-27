import { html, LitElement } from 'lit';
import { property } from 'lit-element';
import { customElement } from 'lit/decorators.js';

@customElement('lj-home')
export class Home extends LitElement {
    @property() url = '';

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        // eslint-disable-next-line wc/guard-super-call
        super.connectedCallback();
        const baseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';
        const eventTitle = 'Liza and James Iowa Wedding';
        const location =
            'Living History Farms, 11121 Hickman Rd, Urbandale, IA 50322, USA';
        const dates = '20210625/20210626Z';

        this.url = `${baseUrl}?text=${eventTitle}&dates=${dates}&location=${location}`;
    }

    render() {
        return html`
            <div class="flex justify-center mb-8">
                <a
                    href=${this.url}
                    class="hover:bg-secondary-700 bg-secondary-600 text-neutral-50 px-4 py-2 rounded w-full text-center transition sm:max-w-max"
                >
                    Add to calendar
                </a>
            </div>

            <div
                class="relative h-0 aspect-w-3 aspect-h-4 sm:aspect-w-4 sm:aspect-h-3 mb-12"
            >
                <img
                    class="rounded-lg object-cover"
                    src="./src/assets/liza_james.jpeg"
                    alt=""
                />
            </div>

            <div class="mb-8">
                <div class="text-secondary-700 text-3xl mb-6">
                    Accomodations
                </div>
                <div>
                    <div class="flex items-baseline mb-4">
                        <div class="mr-8 text-xl">Hotel Renovo</div>
                        <div
                            class="bg-secondary-200 text-secondary-800 px-2 rounded-lg text-sm mr-4"
                        >
                            Pool
                        </div>
                        <div
                            class="bg-secondary-200 text-secondary-800 px-2 rounded-lg text-sm"
                        >
                            Fitness Center
                        </div>
                    </div>
                    <div class="font-body max-w-xl">
                        <p>
                            Largest indoor hotel swimming pool in the greater
                            Des Moines area (probably).
                        </p>
                        <p>5 minute walk to Living History Farms</p>
                    </div>
                </div>
            </div>
        `;
    }
}
