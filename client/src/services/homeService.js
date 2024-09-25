import * as requester from './requester'

const BASE_URL = 'http://localhost:3000/api';

export const getHome = () => requester.get(BASE_URL)