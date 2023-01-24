import Bene from "./typeBeneficiaries";

interface Loan {
	beneficiaryDetails: Bene[];
	beneficiaryFor: string;
	beneficiary_amount: number;
	beneficiary_duration: number;
	beneficiary_file_results: any[];
    createdAt: string;
	createdBy: string;
	date: string;
	dateDisbursed: string;
	endsTime: string;
	nextPayment: string;
	paymentDate: string;
	totalPayback: string;
	status: string;
    updatedAt: string;
	_id: string;
}

export default Loan