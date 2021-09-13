const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.ts'],
    theme: {
        fontFamily: {
            display: ['Roca Two'],
            body: ['Euclid Circular A'],
        },
        colors: {
            primary: colors.coolGray,
            secondary: colors.warmGray,
            neutral: colors.warmGray,
            error: colors.red,
        },
        extend: {
            padding: {
                '1/3': '33.3333%',
                '2/3': '66.6667%',
            },
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/aspect-ratio'),
        // eslint-disable-next-line global-require
        require('@tailwindcss/forms'),
    ],
};
