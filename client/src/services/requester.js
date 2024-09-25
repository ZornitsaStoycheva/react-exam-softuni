

export default async function requester (method, url, data) {
    const options = {};

    if(method !== 'GET') {
        options.method = method;
    }

    if(data) {
        options.headers = {
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('token');
    if(token) {
        options.headers = {
            ...options.headers,
            'X-Authorization' : token
        }
    }

    const response = await fetch(url, options);

    if(response.status === 204) {
        return {}
    }

    const result = response.json();

    if(!response.ok) {
        throw result;
    }

    return result;
} 

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
