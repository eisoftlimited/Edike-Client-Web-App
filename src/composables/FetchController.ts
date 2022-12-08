import { useToken } from './TokenController'

const { authToken } = useToken()
let baseUrl = 'http://54.157.198.209:9191/edike/api/v1/'


export const useFetch = () => {
    
    const makeFetch = (method:string, endpoint:string, params?:object) => {
        const options = {
            method: method,
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        };
        return fetch(`${baseUrl}${endpoint}`, options)
    }

    const makeFetchWithAuth = (method:string, endpoint:string) => {
        const options = {
            method: method,
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
                Authorization: authToken()
            }
        };
        return fetch(`${baseUrl}${endpoint}`, options)
    }

    const makeFetchWithAuthAndBody = (method:string, endpoint:string, params:object) => {
        const options = {
            method: method,
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
                Authorization: authToken()
            },
            body: JSON.stringify(params)
        };
        return fetch(`${baseUrl}${endpoint}`, options)
    }

    return { makeFetch, makeFetchWithAuth, makeFetchWithAuthAndBody }
}