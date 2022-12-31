import { useToken } from './TokenController'

const { authToken } = useToken()
// let baseUrl = 'https://edike.onrender.com/edike/api/v1/'
let baseUrl = 'https://api.edike.click/edike/api/v1/'


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
                'x-auth-token': authToken()
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
                'x-auth-token': authToken()
            },
            body: JSON.stringify(params)
        };
        return fetch(`${baseUrl}${endpoint}`, options)
    }

	const makeFetchWithFormData = (method:string, endpoint:string, formData:FormData) => {
		const options = {
            method: method,
            headers: {
                'x-auth-token': authToken()
            },
            body: formData
        }
        return fetch(`${baseUrl}${endpoint}`, options)
    }

	const makeFetchToAnotherUrl = (method:string, url:string) => {
		const options = {
            method: method,
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
                'x-auth-token': authToken()
            }
        };
        return fetch(url, options)
	}

    return { makeFetch, makeFetchWithAuth, makeFetchWithAuthAndBody, baseUrl, makeFetchWithFormData, makeFetchToAnotherUrl }
}