export type Category = {
	id: string;
	name: string;
	emoji?: string;
	color: string;
	is_public: boolean;
};

export type CategoriesSlice = {
	byId: Record<string, Category>;
	previewIds: string[];
	allIds: string[];
};
