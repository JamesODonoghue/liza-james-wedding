const API_URL =
    'https://script.google.com/macros/s/AKfycbxErxbLd733mY99Fr21_N-ffj1rMYzM6uAS2_tvYDPGFmPsQwdqvEAvD3x56b9ZgOx0/exec';

export const api = ({ body = {}, ...customConfig } = {}) => {
    const config = {
        method: body ? 'POST' : 'GET',
        ...(body && { body: JSON.stringify(body) }),
        ...customConfig,
    };

    return fetch(API_URL, config).then(async response => {
        if (response.ok) {
            return response.json();
        }
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
    });
};
