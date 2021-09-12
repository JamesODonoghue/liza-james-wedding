// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import { fromRollup } from '@web/dev-server-rollup';
import postcss from 'rollup-plugin-postcss';
// import { copy } from '@web/rollup-plugin-copy';
// import { esbuildPlugin } from '@web/dev-server-esbuild';
import tailwindcss from 'tailwindcss';

const styles = fromRollup(postcss);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
    nodeResolve: true,
    open: '/',
    watch: !hmr,

    /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
    // esbuildTarget: 'auto'
    appIndex: 'index.html',

    /** Confgure bare import resolve plugin */
    // nodeResolve: {
    //   exportConditions: ['browser', 'development']
    // },
    plugins: [
        styles({
            extract: true,
            plugins: [tailwindcss()],
        }),
    ],

    // See documentation for all available options
});
