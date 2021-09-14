import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-venue')
export class Venue extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="max-w-3xl mx-auto px-8 pt-36">
                <div>
                    <div class="text-5xl sm:text-8xl font-semibold mb-4">
                        <a
                            class="text-primary-800 hover:text-primary-600 dark:hover:text-primary-600 dark:text-primary-300 items-center inline-flex transition"
                            href="https://www.lhf.org/"
                        >
                            <span class="mr-2">Living History Farms</span>
                        </a>
                    </div>
                    <div class="mb-8">
                        11121 Hickman Rd, Urbandale, IA 50322
                    </div>
                    <div class="mb-4 max-w-xl">
                        <p>Ceremony takes place at the Church of the land.</p>
                        <p>
                            Reception afterwards at an authentic 19th century
                            barn!
                        </p>
                    </div>
                </div>
            </div>
            <div class="py-36">
                <div class="max-w-3xl mx-auto px-8">
                    <div class="mb-32">
                        <div class="sm:flex items-center mb-12">
                            <div
                                class="sm:mr-8 sm:text-6xl text-4xl font-semibold mb-4"
                            >
                                <a
                                    class="inline-flex items-center text-primary-800 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-600 transition"
                                    href="https://hotelrenovo.com/"
                                    ><span class="h-6 mr-2">Hotel Renovo</span>
                                </a>
                            </div>
                            <div
                                class="bg-secondary-100 text-secondary-800 dark:bg-neutral-900 dark:text-primary-300 border px-2 rounded text-sm sm:mr-4 mr-2 font-body sm:block inline-flex"
                            >
                                Pool
                            </div>
                            <div
                                class="bg-secondary-100 text-secondary-800 dark:bg-neutral-900 dark:text-primary-300 border px-2 rounded text-sm font-body sm:block inline-flex"
                            >
                                Fitness Center
                            </div>
                        </div>
                        <div class="font-body max-w-xl">
                            <p class="mb-2 text-xl">
                                Ask for the Liza and James Wedding block.
                            </p>
                            <p class="mb-2">
                                Largest indoor hotel swimming pool in the
                                greater Des Moines area (probably).
                            </p>
                            <p class="mb-2">
                                5 minute walk to Living History Farms
                            </p>
                        </div>
                    </div>
                    <div class="mb-12">
                        <div class="flex items-baseline mb-8">
                            <div
                                class="mr-8 sm:text-6xl text-4xl font-semibold"
                            >
                                <a
                                    class="inline-flex items-center text-primary-800 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-600 transition"
                                    href="https://revelhoteldsm.com/"
                                    ><span class="h-6 mr-2">Hotel Revel</span>
                                </a>
                            </div>
                        </div>
                        <div class="font-body max-w-xl">
                            <p class="mb-2">
                                Located behind the Renovo, also 5 min walk to
                                Living Farms.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-xl">
                        <div class="text-2xl mb-4 font-medium">
                            Other accomodations
                        </div>
                        <p class="font-body">
                            Living History Farms is around 15 minutes from
                            downtown Des Moines where there are many options for
                            hotels and airbnbs.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}
