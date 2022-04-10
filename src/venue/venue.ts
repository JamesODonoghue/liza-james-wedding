import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lj-venue')
export class Venue extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="max-w-3xl mx-auto px-8 pt-64">
                <div
                    class="text-4xl uppercase font-semibold tracking-widest mb-8"
                >
                    Where the party's at
                </div>
                <div class="text-2xl font-semibold mb-4">
                    <a
                        class="text-primary-800 hover:text-primary-600 dark:hover:text-primary-600 dark:text-primary-300 items-center inline-flex transition"
                        href="https://www.lhf.org/"
                    >
                        <span class="mr-2">Living History Farms</span>
                    </a>
                </div>
                <div class="mb-8">11121 Hickman Rd, Urbandale, IA 50322</div>
                <div class="mb-4 max-w-xl">
                    <p>Ceremony at Church of the Land</p>
                    <p>Reception afterwards at the Flynn Barn</p>
                </div>
            </div>
            <div class="py-36">
                <div class="max-w-3xl mx-auto px-8">
                    <div
                        class="text-4xl uppercase font-semibold tracking-widest mb-8"
                    >
                        Where to stay
                    </div>
                    <div class="mb-12">
                        <div class="sm:flex items-center mb-4">
                            <div class="text-2xl font-semibold sm:mr-8">
                                <a
                                    class="inline-flex items-center text-primary-800 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-600 transition"
                                    href="https://hotelrenovo.com/"
                                    ><span>Hotel Renovo</span>
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
                            <div class="mb-8">
                                <div>11167 Hickman Rd, Urbandale, IA 50322</div>
                                <div class="mb-4">(515) 276-1126</div>
                                <p class="mb-2">
                                    Call and ask for the Liza and James wedding
                                    block
                                </p>
                            </div>

                            <div class="mb-2 font-semibold">Fast facts</div>

                            <p class="mb-2">
                                5 minute walk to Living History Farms
                            </p>
                            <p class="mb-2">
                                Largest indoor hotel swimming pool in the
                                greater Des Moines area (probably)
                            </p>
                        </div>
                    </div>
                    <div class="max-w-xl">
                        <div class="text-2xl mb-4 font-medium">
                            Alternate accomodations
                        </div>
                        <p class="font-body">
                            Living History Farms is around 15 minutes from
                            downtown Des Moines where there are many options for
                            hotels and airbnbs.
                        </p>
                    </div>
                </div>
            </div>
            <div class="max-w-3xl mx-auto px-8 py-36">
                <div
                    class="text-4xl uppercase font-semibold tracking-widest mb-8"
                >
                    What to wear
                </div>
                <div class="mb-4 max-w-xl">
                    <div class="text-xl font-bold mb-2">
                        Semi-formal garden attire
                    </div>
                    <p class="mb-8">
                        Bright colors encouraged. Wear dress shoes that are
                        compatible with gravel and grass for the ceremony;
                        sneakers are a fashionable choice for dancing in the
                        barn.
                    </p>
                    <div class="text-xl font-bold mb-2">Prepare for rain</div>
                    <p>
                        The last week in June boasts a high chance of rain and
                        humidity in central Iowa. The church has air
                        conditioning but the barn does not. Pack umbrellas, rain
                        coats, and personal fans if you have them!
                    </p>
                </div>
            </div>
        `;
    }
}
