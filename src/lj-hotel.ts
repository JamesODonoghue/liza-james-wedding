import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-hotel')
export class Hotel extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="max-w-3xl mx-auto px-8 py-24">
                <div class="mb-12">
                    <div class="sm:flex items-center mb-8">
                        <div class="sm:mr-8 text-4xl font-semibold">
                            <a
                                class="inline-flex items-center text-secondary-800 hover:text-secondary-600"
                                href="https://hotelrenovo.com/"
                                ><span class="h-6 mr-2">Hotel Renovo</span>
                            </a>
                        </div>
                        <div
                            class="bg-secondary-100 text-secondary-800 px-2 rounded text-sm sm:mr-4 font-body sm:block inline-flex"
                        >
                            Pool
                        </div>
                        <div
                            class="bg-secondary-100 text-secondary-800 px-2 rounded text-sm font-body sm:block inline-flex"
                        >
                            Fitness Center
                        </div>
                    </div>
                    <div class="font-body max-w-xl">
                        <p class="mb-2">
                            Largest indoor hotel swimming pool in the greater
                            Des Moines area (probably).
                        </p>
                        <p class="mb-2">
                            5 minute walk to Living History Farms
                        </p>
                        <p class="mb-2 font-medium ">
                            Call and ask for the Kroeschell and O'Donoghue
                            Wedding block.
                        </p>
                    </div>
                </div>
                <div class="mb-12">
                    <div class="flex items-baseline mb-8">
                        <div class="mr-8 text-4xl font-semibold">
                            <a
                                class="inline-flex items-center"
                                href="https://revelhoteldsm.com/"
                                ><span class="h-6 mr-2">Hotel Revel</span>

                                <!-- <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 inline-flex"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg> -->
                            </a>
                        </div>
                    </div>
                    <div class="font-body max-w-xl">
                        <p class="mb-2">
                            Located behind the Renovo, also 5 min walk to Living
                            Farms.
                        </p>
                    </div>
                </div>
                <div class="max-w-xl">
                    <div class="text-xl mb-8">Other accomodations</div>
                    <p class="font-body">
                        Living History Farms is around 15 minutes from downtown
                        Des Moines where there are many options for hotels and
                        airbnbs.
                    </p>
                </div>
            </div>
        `;
    }
}
