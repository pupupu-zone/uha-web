export type Payment = {
	id: string;
	user_id: string;
	name: string;
	color: string;
	comment: string;
	emoji: string;
};

export type PaymentsSlice = {
	byId: Record<string, Payment>;
	previewIds: string[];
	allIds: string[];
};
