const API_URL =
    'https://script.google.com/macros/s/AKfycbxwSobtiRi7c2mq9zSLQ2Yc8xc1ts03iwrabChqrg6l4l_itG7RfQWlz1mLe9Z93qeQ/exec';

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
