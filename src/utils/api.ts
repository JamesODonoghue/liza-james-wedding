const API_URL =
    'https://script.google.com/macros/s/AKfycbwyoisgzxu1o2HWix50n2CHYaSIqWW1uIby8hvGrtE4NKxijiqRZJHVTjg_UIP_cdzp/exec';

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
