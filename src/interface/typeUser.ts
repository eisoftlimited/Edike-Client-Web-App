interface User {
	_id: string;
    createdAt: string;
    email: string;
    firstname: string;
    isAccountVerified: string;
	isappliedforloan: string;
	isbankstatementadded: string;
    isbvn: string;
    iscardadded: string;
	isloaned: string;
    isnin: string;
    lastname: string;
    phone: number;
    role: string;
    updatedAt: string;
}

export default User