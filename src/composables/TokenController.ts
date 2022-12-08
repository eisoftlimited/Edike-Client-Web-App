

export const useToken  = () => {
	const saveTokenToLS = (token:string, id:string, created:number) => {
        localStorage.setItem("eduloanEdikeUserAuthToken", JSON.stringify({tokenValue: `Bearer ${token}`, userId: id, created: created}));
    }

    const deleteDataFromLS = () => {
        localStorage.removeItem("eduloanEdikeUserAuthToken")
    }

    const getDataFromLS = () => {
        const LS = localStorage.getItem("eduloanEdikeUserAuthToken")
        if(LS) {
            return JSON.parse(LS)
        } else {
            return LS
        }
    } 

    const authToken = () => {
        return getDataFromLS() ? getDataFromLS().tokenValue : null
    }

    const userID = () => {
        return getDataFromLS() ? getDataFromLS().userId : null
    }

	return { saveTokenToLS, deleteDataFromLS, authToken, userID }
}