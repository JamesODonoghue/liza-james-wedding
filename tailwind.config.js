const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Roca One'],
            body: ['ui-sans'],
        },
        colors: {
            primary: colors.teal,
            secondary: colors.lightBlue,
            neutral: colors.gray,
        },
        extend: {
            padding: {
                '1/3': '33.3333%',
                '2/3': '66.6667%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/aspect-ratio'),
    ],
};
