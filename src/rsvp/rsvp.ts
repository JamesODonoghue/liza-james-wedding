import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../components/text-field/text-field.js';
import '../components/radio/radio.js';

interface Guest {
    name: string;
}

interface FormRequest {
    name: string;
    email: string;
    rsvp: string;
    guests: Guest[];
}

@customElement('lj-rsvp')
export class Rsvp extends LitElement {
    @state() name = '';

    @state() email = '';

    @state() guests: Guest[] = [];

    @state() formRequest: FormRequest = {
        name: '',
        email: '',
        rsvp: 'ACCEPT',
        guests: [],
    };

    createRenderRoot() {
        return this;
    }

    handleChangeName(e: Event) {
        const input = e.target as HTMLInputElement;
        this.name = input.value;
        this.formRequest = {
            ...this.formRequest,
            name: this.name,
        };
    }

    handleChangeEmail(e: Event) {
        const input = e.target as HTMLInputElement;
        this.email = input.value;
        this.formRequest = {
            ...this.formRequest,
            email: this.email,
        };
    }

    handleChangeRsvp(e: Event) {
        const input = e.target as HTMLInputElement;

        this.formRequest = {
            ...this.formRequest,
            rsvp: input.value,
        };
    }

    handleChangeGuest(e: Event) {
        const input = e.target as HTMLInputElement;

        this.guests = this.guests.map((guest, index) => ({
            name: index === parseFloat(input.name) ? input.value : guest.name,
        }));
    }

    async postForm() {
        const request = {
            Name: this.formRequest.name,
            Email: this.formRequest.email,
            Rsvp: this.formRequest.rsvp,
            Guests: this.guests,
        };

        const result = await fetch(
            'https://script.google.com/macros/s/AKfycbyS3i-DfmOp5tGrsrMYeUr_gKEGkiKoSAcwZS4uSdh0SxoB8xar0p3E9wuWvOeDwUv6/exec',
            {
                method: 'POST',
                body: JSON.stringify(request),
            }
        );

        const json = await result.json();

        console.log(json);
    }

    handleAddGuest() {
        this.guests = [...this.guests, { name: '' }];
    }

    handleRemoveGuest(e: any) {
        this.guests = [
            ...this.guests.slice(0, e.target?.key),
            ...this.guests.slice(e.target?.key + 1),
        ];
    }

    renderNameSection() {
        return html`
            <div class="mb-8">
                <div class="mb-2">
                    <label>Name</label>
                </div>

                <lj-textfield
                    inputType="text"
                    required
                    @input=${this.handleChangeName}
                ></lj-textfield>
            </div>
        `;
    }

    renderEmailSection() {
        return html`
            <div class="mb-8">
                <div class="mb-2">
                    <label>Email</label>
                </div>
                <lj-textfield
                    inputType="email"
                    @change=${this.handleChangeEmail}
                ></lj-textfield>
            </div>
        `;
    }

    renderRsvpSection() {
        return html`
            <div class="mb-8" @change=${this.handleChangeRsvp}>
                <div class="mb-2">
                    <label>RSVP</label>
                </div>
                <div class="mb-2">
                    <lj-radio
                        label="Accept"
                        inputId="accept"
                        name="rsvp"
                        value="ACCEPT"
                        ?checked=${this.formRequest.rsvp === 'ACCEPT'}
                    ></lj-radio>
                </div>
                <div>
                    <lj-radio
                        label="Decline"
                        inputId="decline"
                        name="rsvp"
                        value="DECLINE"
                        ?checked=${this.formRequest.rsvp === 'DECLINE'}
                    ></lj-radio>
                </div>
            </div>
        `;
    }

    renderGuestSection({ key, name }: { key: number; name: string }) {
        return html`
            <div class="mb-12 flex items-end">
                <div class="w-3/4 mr-8">
                    <div class="mb-2">
                        <label>Guest Name</label>
                    </div>
                    <lj-textfield
                        .name=${key}
                        value=${name}
                        @change=${this.handleChangeGuest}
                    ></lj-textfield>
                </div>
                <div>
                    <button
                        .key=${key}
                        @click=${this.handleRemoveGuest}
                        class="tracking-widest uppercase font-bold text-neutral-700 hover:bg-primary-200 px-12 py-3 rounded w-full text-center transition"
                    >
                        Remove
                    </button>
                </div>
            </div>
        `;
    }

    renderMainButtons() {
        return html`
            <div class="flex items-center w-full">
                <div class="w-full mr-4">
                    <button
                        ?disabled=${!this.name}
                        class="w-full border-2 tracking-widest uppercase font-bold border-neutral-600 text-neutral-700 hover:bg-primary-200 px-12 py-4 rounded text-center transition disabled:text-neutral-300 disabled:hover:bg-neutral-50 disabled:border-neutral-300 disabled:cursor-not-allowed"
                        @click=${this.handleAddGuest}
                    >
                        Add Guest
                    </button>
                </div>
                <div class="w-full">
                    <button
                        ?disabled=${!this.name}
                        class="w-full tracking-widest uppercase font-bold bg-primary-600 text-primary-50 hover:bg-primary-800 px-12 py-4 rounded text-center transition disabled:bg-primary-300 disabled:hover:bg-primary-300 disabled:cursor-not-allowed"
                        @click=${this.postForm}
                    >
                        Submit
                    </button>
                </div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="sm:py-64 my-40">
                <div class="max-w-3xl mx-auto px-8">
                    <div>
                        <div class="text-5xl sm:text-8xl font-semibold mb-8">
                            <span class="mr-2">RSVP</span>
                        </div>
                        <div>
                            ${this.renderNameSection()}
                            ${this.renderEmailSection()}
                            ${this.renderRsvpSection()}
                            <div class="mb-12">
                                ${this.guests.map(({ name }, key) =>
                                    this.renderGuestSection({
                                        key,
                                        name,
                                    })
                                )}
                            </div>
                            ${this.renderMainButtons()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
