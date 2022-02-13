import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lj-eat')
export class Eat extends LitElement {
    @state() restaraunts = [
        {
            name: 'Proudfoot and Bird',
            href: 'https://www.opentable.com/r/proudfoot-and-bird-des-moines',
            emoji: '🏨',
        },
        {
            name: 'Latin King',
            href: 'https://www.latinkingdsm.com/',
            emoji: '🍝',
        },
        {
            name: 'Splash Seafood',
            href: 'http://splash-seafood.com/',
            emoji: '🐟',
        },
        {
            name: 'Centro',
            href: 'http://www.centrodesmoines.com/',
            emoji: '🍝',
        },
        {
            name: '801 Chophouse',
            href: 'https://801chophouse.com/',
            emoji: '🥩',
        },
        {
            name: 'Alba',
            href: 'https://www.albadsm.com/',
            emoji: '🥩 🥗',
        },
        {
            name: 'Django',
            href: 'http://www.djangodesmoines.com/',
            emoji: '🇫🇷',
        },
        {
            name: "Jesse's Embers",
            href: 'https://theoriginaljessesembers.com/',
            emoji: '🥩',
        },
        {
            name: 'Roca',
            href: 'https://www.rocadsm.com/',
            emoji: '🍸',
        },
        {
            name: 'Fresko',
            href: 'https://www.freskodsm.com/',
            emoji: '🥗',
        },
        {
            name: 'Cosi Cucina',
            href: 'https://www.cosicucina.com/',
            emoji: '🍕',
        },
    ];

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="max-w-3xl mx-auto px-8">
                <div
                    class="text-4xl uppercase font-semibold tracking-widest mb-8"
                >
                    Where to eat
                </div>
                <div class="mb-32">
                    ${this.restaraunts.map(
                        ({ name, href, emoji }) => html`
                            <a
                                href=${href}
                                class="sm:flex items-center rounded p-4 hover:bg-primary-100"
                            >
                                <div class="text-2xl font-semibold sm:mr-8">
                                    <div
                                        class="inline-flex items-center text-primary-900"
                                    >
                                        <span>${name}</span>
                                    </div>
                                    <span class="ml-4">${emoji}</span>
                                </div>
                            </a>
                        `
                    )}
                </div>
            </div>
        `;
    }
}
