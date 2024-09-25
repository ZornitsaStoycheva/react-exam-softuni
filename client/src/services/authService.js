import * as requester from './requester';

const BASE_URL = 'http://localhost:3000/api'

export const register = async (username, email, password, rePassword) => {
    const result = await requester.post(`${BASE_URL}/auth/register`, {
        username, email, password, rePassword
    })

    return result;
}

export const login = async (email, password) => {
    const result = await requester.post(`${BASE_URL}/auth/login`, {
        email, password
    })

    return result;
}

export const logout = async () => {
    const result = await requester.post(`${BASE_URL}/auth/logout`)
}