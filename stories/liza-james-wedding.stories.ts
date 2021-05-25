import { html, TemplateResult } from 'lit-html';
import '../src/liza-james-wedding.js';

export default {
    title: 'LizaJamesWedding',
    component: 'liza-james-wedding',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    title?: string;
    backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
    title,
    backgroundColor = 'white',
}: ArgTypes) => html`
    <liza-james-wedding
        style="--liza-james-wedding-background-color: ${backgroundColor}"
        .title=${title}
    ></liza-james-wedding>
`;

export const App = Template.bind({});
App.args = {
    title: 'My app',
};
