
const LSName = 'eduloanEdikeUserAuthToken';

export const useToken  = () => {
	const saveTokenToLS = (token:string) => {
        localStorage.setItem(LSName, JSON.stringify({tokenValue: `${token}`}));
    }

    const deleteDataFromLS = () => {
        localStorage.removeItem(LSName)
    }

    const getDataFromLS = () => {
        const LS = localStorage.getItem(LSName)
        if(LS) {
            return JSON.parse(LS)
        } else {
            return LS
        }
    } 

    const authToken = () => {
        return getDataFromLS() ? getDataFromLS().tokenValue : null
    }

	const isAuthenticated = () => {
		return authToken() ? true : false
	}

    // const userID = () => {
    //     return getDataFromLS() ? getDataFromLS().userId : null
    // }

	return { saveTokenToLS, deleteDataFromLS, authToken, isAuthenticated }
}