export type Payment = {
	id: string;
	user_id: string;
	name: string;
	color: string;
	comment: string;
	emoji: string;
	is_default: boolean;
	is_deleted: boolean;
	created_at: string;
	updated_at: string;
};

export type PaymentsSlice = {
	byId: Record<string, Payment>;
	previewIds: string[];
	allIds: string[];
};
