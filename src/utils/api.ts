const API_URL =
    'https://script.google.com/macros/s/AKfycbwgRkH1bm579RnIVg3yN4rzJXS3GtzISdkONtATgFHyoDbv_wGXr-wP8dNeFBveak6D/exec';

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
