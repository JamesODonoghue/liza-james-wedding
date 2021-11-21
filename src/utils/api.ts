const API_URL =
    'https://script.google.com/macros/s/AKfycbw7l3gBgoFlRIEjG_jkP_YiC19xxp125MADMzajI2Fb4iNEZ2t37Hs-bWevv5dbPyZ-/exec';

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
