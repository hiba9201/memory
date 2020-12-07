import { apiUrl, Methods } from './consts';

async function request(url, method, body) {
    try {
        const response = await fetch(`${apiUrl}${url}`, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body && JSON.stringify(body),
        });
    
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

export async function getRequest(url, body) {
    return await request(url, Methods.Get, body);
}

export async function patchRequest(url, body) {
    return await request(url, Methods.Patch, body);
}

export async function postRequest(url, body) {
    return await request(url, Methods.Post, body);
}