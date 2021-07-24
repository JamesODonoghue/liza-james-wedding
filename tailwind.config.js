const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Roca Two'],
            body: ['Euclid Circular A'],
        },
        colors: {
            primary: colors.emerald,
            secondary: colors.warmGray,
            neutral: colors.coolGray,
        },
        extend: {
            padding: {
                '1/3': '33.3333%',
                '2/3': '66.6667%',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'dark', 'hover'],
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/aspect-ratio'),
    ],
};
