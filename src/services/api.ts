import axios from "axios"


const URL = 'http://localhost:3000/'

const api = axios.create({
    baseURL: URL
})


export async function get<TResponse>(endpoint: string) {
    const response = await api.get<TResponse>(endpoint)
    return response.data
}