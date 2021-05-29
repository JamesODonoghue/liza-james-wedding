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

        this.url =
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=MW5qMjFyanVwMnFldHNqaTN1NjVoYjlmc2ogam9kb25vZ2gxQG0&tmsrc=jodonogh1%40gmail.com';
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
                class="relative h-0 aspect-w-3 aspect-h-4 sm:aspect-w-5 sm:aspect-h-3 mb-12"
            >
                <img
                    class="rounded-lg object-cover"
                    src="./src/assets/liza_james.jpeg"
                    alt=""
                />
            </div>

            <div class="mb-16">
                <div class="text-3xl text-primary-800 mb-4">
                    Where am I going?
                </div>
                <div class="text-xl mb-4">
                    <a
                        class="text-secondary-800 hover:text-secondary-600 items-center inline-flex"
                        href="https://www.lhf.org/"
                    >
                        <span class="mr-2 h-6">Living History Farms</span>

                        <svg
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
                        </svg>
                    </a>
                </div>
                <div class="mb-4">
                    <div class="font-light">Ceremony</div>
                    <div class="font-semibold text-primary-800">
                        Church of the land
                    </div>
                </div>
                <div>
                    <div class="font-light">Reception</div>
                    <div class="font-semibold text-primary-800">Flynn Barn</div>
                </div>
            </div>
            <div class="mb-16">
                <div class="text-3xl text-primary-800 mb-4">
                    Where am I staying?
                </div>
                <div class="mb-12">
                    <div class="sm:flex items-center mb-4">
                        <div class="sm:mr-8 text-xl">
                            <a
                                class="text-xl text-secondary-800 hover:text-secondary-600 inline-flex items-center"
                                href="https://hotelrenovo.com/"
                                ><span class="h-6 mr-2">Hotel Renovo</span>

                                <svg
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
                                </svg>
                            </a>
                        </div>
                        <div
                            class="bg-secondary-200 text-secondary-800 px-2 rounded text-sm sm:mr-4 font-body sm:block inline-flex"
                        >
                            Pool
                        </div>
                        <div
                            class="bg-secondary-200 text-secondary-800 px-2 rounded text-sm font-body sm:block inline-flex"
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
                        <p class="mb-2 font-medium text-primary-800">
                            Call and ask for the Kroeschell and O'Donoghue
                            Wedding block.
                        </p>
                    </div>
                </div>
                <div class="mb-12">
                    <div class="flex items-baseline mb-4">
                        <div class="mr-8 text-xl">
                            <a
                                class="text-xl text-secondary-800 hover:text-secondary-600 inline-flex items-center"
                                href="https://revelhoteldsm.com/"
                                ><span class="h-6 mr-2">Hotel Revel</span>

                                <svg
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
                                </svg>
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
                    <div class="text-xl text-secondary-800 mb-4">
                        Other accomodations
                    </div>
                    <p class="font-body">
                        Living History Farms is around 15 minutes from downtown
                        Des Moines where there are many options for hotels and
                        airbnbs.
                    </p>
                </div>
            </div>
            <div class="mb-16">
                <div class="text-3xl text-primary-800 mb-4">
                    How do I get there?
                </div>
                <div class="mb-4">
                    <a
                        class="sm:text-xl text-secondary-800 hover:text-secondary-600 inline-flex items-center"
                        href="https://www.google.com/maps/dir/Des+Moines+International+Airport+(DSM),+5800+Fleur+Dr,+Des+Moines,+IA+50321/Hotel+Renovo,+11167+Hickman+Rd,+Urbandale,+IA+50322/@41.5648848,-93.7800806,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x87eea1f80909570b:0x80179b8d59f567a!2m2!1d-93.6587958!2d41.5341333!1m5!1m1!1s0x87ec20cd8ef645ef:0x531f17fd34b8ee38!2m2!1d-93.7734688!2d41.6160864!3e0"
                        ><span class="h-6 mr-2"
                            >DSM Airport to Hotel Renovo</span
                        >

                        <svg
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
                        </svg>
                    </a>
                </div>
                <div>
                    <a
                        class="sm:text-xl text-secondary-800 hover:text-secondary-600 inline-flex items-center"
                        href="https://www.google.com/maps/dir/Des+Moines+International+Airport,+Fleur+Drive,+Des+Moines,+IA/Living+History+Farms,+11121+Hickman+Rd,+Urbandale,+IA+50322/@41.5652879,-93.7451459,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x87eea1f80909570b:0x80179b8d59f567a!2m2!1d-93.6587958!2d41.5341333!1m5!1m1!1s0x87ec20ccf91cbf7d:0x37ed847db7aac69a!2m2!1d-93.7705303!2d41.6169508!3e0"
                        ><span class="sm:h-6 mr-2"
                            >DSM Airport to Living History Farms</span
                        >

                        <svg
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
                        </svg>
                    </a>
                </div>
            </div>
            <div class="mb-16">
                <div class="text-3xl text-primary-800 mb-4">
                    What am I wearing?
                </div>
                <div>
                    <a
                        class="text-xl text-secondary-800 hover:text-secondary-600 inline-flex items-center"
                        href="https://www.brides.com/story/wedding-dress-code-explained#semi-formal-or-dressy-casual"
                        ><span class="h-6 mr-2">Dressy casual</span>

                        <svg
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
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }
}
