interface actualCard {
	account_name: string;
	bank: string;
	bin: string;
	brand: string;
	card_type: string;
	channel: string;
	country_code: string;
	exp_month: string;
	exp_year: string;
	last4: string;
	reusable: string;
	date: string;
}

interface Card {
	createdAt: string;
	updatdAt: string;
	date: string;
	card: actualCard[];
	createdBy: string;
	_id: string;
}


export default Card