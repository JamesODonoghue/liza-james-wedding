/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';
import { api } from '../utils/api.js';

import '../components/text-field/text-field.js';
import '../components/radio/radio.js';
import '@material/mwc-circular-progress';
import { validateEmail } from '../utils/util.js';

interface Guest {
    name: string;
}

enum FormStatus {
    INITIAL = 'INITIAL',
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
}

@customElement('lj-rsvp')
export class Rsvp extends LitElement {
    private guestId = '';

    @state() firstName = '';

    @state() lastName = '';

    @state() email = '';

    @state() artist = '';

    @state() track = '';

    @state() rsvp = 'ACCEPT';

    @state() guests: Guest[] = [];

    @state() formStatus = FormStatus.INITIAL;

    @state() isEmailValid = false;

    @state() progressSpinner: Ref<HTMLElement> = createRef();

    createRenderRoot() {
        return this;
    }

    updated(_changedProps: Map<string | number | symbol, unknown>) {
        if (_changedProps.has('formStatus')) {
            this.handleFormStatusUpdated();
        }
    }

    handleFormStatusUpdated() {
        if (this.formStatus === FormStatus.PENDING) {
            this.progressSpinner.value?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
        this.guestId = localStorage.getItem('lizaJamesGuestId') ?? '';
        this.firstName = localStorage.getItem('lizaJamesGuestFirstName') ?? '';
        this.lastName = localStorage.getItem('lizaJamesGuestLastName') ?? '';
    }

    handleInput(e: Event) {
        const input = e.target as HTMLInputElement;
        this[input.name as keyof this] = input.value as any;
    }

    handleChangeRsvp(e: Event) {
        const input = e.target as HTMLInputElement;
        this.rsvp = input.value;
        if (this.rsvp === 'DECLINE') {
            this.guests = [];
        }
    }

    resetGuestList() {
        this.guests = [];
    }

    isRsvpDecline() {
        return this.rsvp === 'DECLINE';
    }

    isExistingGuest() {
        return localStorage.getItem('lizaJamesGuestId');
    }

    handleChangeGuest(e: Event) {
        const input = e.target as HTMLInputElement;

        this.guests = this.guests.map((guest, index) => ({
            name: index === parseFloat(input.name) ? input.value : guest.name,
        }));
    }

    async postForm() {
        this.formStatus = FormStatus.PENDING;
        const request = {
            Id: this.guestId,
            FirstName: this.firstName,
            LastName: this.lastName,
            Email: this.email,
            Rsvp: this.rsvp,
            Guests: this.guests,
            Artist: this.artist,
            Track: this.track,
        };

        try {
            const { Id, FirstName, LastName, Rsvp, Artist, Track } = await api({
                body: request,
            });
            localStorage.setItem('lizaJamesGuestId', Id);
            localStorage.setItem('lizaJamesGuestFirstName', FirstName);
            localStorage.setItem('lizaJamesGuestLastName', LastName);
            localStorage.setItem('lizaJamesGuestRsvp', Rsvp);
            localStorage.setItem('lizaJamesGuestArtist', Artist);
            localStorage.setItem('lizaJamesGuestTrack', Track);
            this.formStatus = FormStatus.SUCCESS;
        } catch (e) {
            this.formStatus = FormStatus.FAIL;
        }
    }

    handleAddGuest() {
        this.guests = [...this.guests, { name: '' }];
    }

    handleRemoveGuest(e: any) {
        e.preventDefault();
        this.guests = [
            ...this.guests.slice(0, e.target?.key),
            ...this.guests.slice(e.target?.key + 1),
        ];
    }

    handleEditRsvp() {
        this.formStatus = FormStatus.INITIAL;
    }

    // eslint-disable-next-line class-methods-use-this
    handleClear() {
        localStorage.removeItem('lizaJamesGuestFirstName');
        localStorage.removeItem('lizaJamesGuestLastName');
        localStorage.removeItem('lizaJamesGuestId');
        localStorage.removeItem('lizaJamesGuestEmail');
    }

    renderNameSection() {
        return html`
            <div class="sm:flex items-center mb-8">
                <div class="mr-8 w-full mb-8 sm:mb-0">
                    <div class="mb-2">
                        <label>First Name</label>
                    </div>

                    <lj-textfield
                        inputType="text"
                        .value=${this.firstName}
                        ?disabled=${!!this.guestId}
                        name="firstName"
                    ></lj-textfield>
                </div>
                <div class="w-full">
                    <div class="mb-2">
                        <label>Last Name</label>
                    </div>

                    <lj-textfield
                        inputType="text"
                        name="lastName"
                        ?disabled=${!!this.guestId}
                        .value=${this.lastName}
                    ></lj-textfield>
                </div>
            </div>
        `;
    }

    validateEmail(e: Event) {
        const input = e.target as HTMLInputElement;
        this.isEmailValid = validateEmail(input.value);
    }

    renderEmailSection() {
        return html`
            <div class="mb-8">
                <div class="mb-2">
                    <label>Email</label>
                </div>
                <lj-textfield
                    inputType="email"
                    name="email"
                    placeholder="wedding.guest@email.com"
                    @change=${this.validateEmail}
                    ?invalid=${!this.isEmailValid}
                ></lj-textfield>
            </div>
        `;
    }

    renderRsvpSection() {
        return html`
            <div class="mb-8">
                <div class="mb-2">
                    <label>RSVP</label>
                </div>
                <div class="flex items-center">
                    <div class="w-full mr-8">
                        <lj-radio
                            label="Accept"
                            inputId="accept"
                            name="rsvp"
                            value="ACCEPT"
                            @change=${this.handleChangeRsvp}
                            ?checked=${this.rsvp === 'ACCEPT'}
                        ></lj-radio>
                    </div>
                    <div class="w-full">
                        <lj-radio
                            label="Decline"
                            inputId="decline"
                            name="rsvp"
                            value="DECLINE"
                            @change=${this.handleChangeRsvp}
                            ?checked=${this.rsvp === 'DECLINE'}
                        ></lj-radio>
                    </div>
                </div>
            </div>
        `;
    }

    handleIconClick(e: Event) {
        e.preventDefault();
    }

    renderGuestSection({ key, name }: { key: number; name: string }) {
        return html`
            <div class="mb-12">
                <div class="mb-2">
                    <label>Guest Name</label>
                </div>
                <div class="flex items-center">
                    <div class="w-3/4 mr-8">
                        <lj-textfield
                            .name=${key}
                            value=${name}
                            @input=${this.handleChangeGuest}
                        ></lj-textfield>
                    </div>
                    <div>
                        <button
                            .key=${key}
                            @click=${this.handleRemoveGuest}
                            class="hidden sm:block tracking-widest uppercase font-bold text-neutral-700 hover:bg-primary-200 px-8 py-3 rounded w-full text-center transition"
                        >
                            Remove
                        </button>
                        <button
                            .key=${key}
                            @click=${this.handleRemoveGuest}
                            class="sm:hidden tracking-widest uppercase font-bold text-neutral-700 hover:bg-primary-200 p-2 rounded text-center transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                                class="pointer-events-none"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    areGuestNamesValid() {
        return !this.guests.find(guest => !guest.name);
    }

    renderMainButtons() {
        return html`
            <div class="sm:flex items-center w-full mt-12">
                <div class="w-full mr-8 mb-4 sm:mb-0">
                    <button
                        ?disabled=${!this.firstName ||
                        !this.lastName ||
                        this.rsvp === 'DECLINE'}
                        class="w-full border-2 tracking-widest uppercase font-bold border-neutral-600 text-neutral-700 hover:bg-primary-200 px-12 py-4 rounded text-center transition disabled:text-neutral-300 disabled:hover:bg-neutral-50 disabled:border-neutral-300 disabled:cursor-not-allowed"
                        @click=${this.handleAddGuest}
                    >
                        Add Guest
                    </button>
                </div>
                <div class="w-full">
                    <button
                        ?disabled=${!this.firstName ||
                        !this.lastName ||
                        !this.areGuestNamesValid()}
                        class="w-full tracking-widest uppercase font-bold bg-primary-600 text-primary-50 hover:bg-primary-800 px-12 py-4 rounded text-center transition disabled:bg-primary-300 disabled:hover:bg-primary-300 disabled:cursor-not-allowed"
                        @click=${this.postForm}
                    >
                        Submit
                    </button>
                </div>
            </div>
        `;
    }

    renderProgressSpinner() {
        return html`
            <div ${ref(this.progressSpinner)} class="flex justify-center py-24">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
        `;
    }

    renderFailedSubmit() {
        return html` <div></div> `;
    }

    renderCompleteSubmit() {
        return html`
            <div class="max-w-md mx-auto py-24">
                <div class="text-4xl font-semibold mb-8 flex items-center">
                    <div class="text-success-600 mr-4">
                        <span class="material-icons"> check_circle </span>
                    </div>
                    <div>Success!</div>
                </div>
                <div class="text-xl mb-4">
                    Thank you for submitting your response :)
                </div>
                <div class="text-xl mb-12">
                    If you have any questions please email at
                    liza.kroeschell@gmail.com
                </div>

                <div>
                    <button
                        class="w-full tracking-widest uppercase font-bold bg-primary-600 text-primary-50 hover:bg-primary-800 px-12 py-4 rounded text-center transition disabled:bg-primary-300 disabled:hover:bg-primary-300 disabled:cursor-not-allowed"
                        @click=${this.handleEditRsvp}
                    >
                        Edit rsvp
                    </button>
                </div>
            </div>
        `;
    }

    renderDanceSongSection() {
        return html`
            <div>
                <div class="text-xl font-semibold mb-8">
                    What song will get you on the dance floor?
                </div>
                <div class="mb-8 sm:flex items-center">
                    <div class="mr-8 w-full mb-8 sm:mb-0">
                        <div class="mb-2">
                            <label>Artist</label>
                        </div>

                        <lj-textfield
                            inputType="text"
                            name="artist"
                            .value=${this.artist}
                        ></lj-textfield>
                    </div>
                    <div class="w-full">
                        <div class="mb-2">
                            <label>Track</label>
                        </div>

                        <lj-textfield
                            inputType="text"
                            name="track"
                            .value=${this.track}
                        ></lj-textfield>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="py-32">
                <div class="max-w-2xl mx-auto px-8">
                    <div class="text-5xl sm:text-8xl font-semibold mb-8">
                        <div>RSVP</div>
                    </div>
                    <div @input=${this.handleInput}>
                        ${this.formStatus === FormStatus.PENDING
                            ? this.renderProgressSpinner()
                            : ''}
                        ${this.formStatus === FormStatus.SUCCESS
                            ? this.renderCompleteSubmit()
                            : ''}
                        ${this.formStatus === FormStatus.INITIAL
                            ? html`
                                  <div>
                                      ${this.renderNameSection()}
                                      ${this.renderEmailSection()}
                                      ${this.renderRsvpSection()}
                                      ${this.rsvp === 'ACCEPT'
                                          ? html`
                                                ${this.renderDanceSongSection()}
                                                ${this.guests.map(
                                                    ({ name }, key) =>
                                                        this.renderGuestSection(
                                                            {
                                                                key,
                                                                name,
                                                            }
                                                        )
                                                )}
                                            `
                                          : ''}
                                      ${this.renderMainButtons()}
                                  </div>
                              `
                            : ''}
                    </div>
                </div>
            </div>
        `;
    }
}
