const API_URL =
    'https://script.google.com/macros/s/AKfycbyocaP9KaKZHH-Oj3aNFhNGFzqmy6rBDUeInCoT6O5iCVmHHTEtXRkS2f19UaRbIquj/exec';

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
