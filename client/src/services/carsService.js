import * as requester from './requester'

const BASE_URL = 'http://localhost:3000/api';

export const getAll = async () => requester.get(`${BASE_URL}/cars`)

export const getCar = async (carId) => requester.get(`${BASE_URL}/cars/${carId}/details`)

export const create =async (carData, userId) => 
    requester.post(`${BASE_URL}/cars/create`, {...carData, userId})

export const deleteCar = async (carId) => requester.del(`${BASE_URL}/cars/delete/${carId}`)

export const likes = async (carId, userId) => {
   
    requester.post(`${BASE_URL}/cars/${carId}/like`, {carId, userId})
    
}

export const edit = async (carId, carData) => requester.put(`${BASE_URL}/cars/edit/${carId}`, carData )

export const myPublish = () => requester.get(`${BASE_URL}/cars/myPublish`)

