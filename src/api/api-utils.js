import { apiUrl, Methods } from './consts';

async function request(url, method, body) {
    try {
        const response = await fetch(`${apiUrl}${url}`, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body && JSON.stringify(body),
        });

        return response.json();
    } catch (e) {
        e.message = `Request error on ${url} with method ${method}`;
        console.error(e);
        return e;
    }
}

export async function getRequest(url, body) {
    return request(url, Methods.Get, body);
}

export async function patchRequest(url, body) {
    return request(url, Methods.Patch, body);
}

export async function postRequest(url, body) {
    return request(url, Methods.Post, body);
}
