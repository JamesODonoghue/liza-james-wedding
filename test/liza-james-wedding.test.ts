/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';

import { LizaJamesWedding } from '../src/liza-james-wedding.js';
import '../src/liza-james-wedding.js';

describe('LizaJamesWedding', () => {
    let element: LizaJamesWedding;
    beforeEach(async () => {
        element = await fixture(
            html`<liza-james-wedding></liza-james-wedding>`
        );
    });

    it('renders a h1', () => {
        const h1 = element.shadowRoot!.querySelector('h1')!;
        expect(h1).to.exist;
        expect(h1.textContent).to.equal('My app');
    });

    it('passes the a11y audit', async () => {
        await expect(element).shadowDom.to.be.accessible();
    });
});
