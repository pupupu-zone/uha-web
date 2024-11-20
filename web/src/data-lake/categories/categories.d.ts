export type Category = {
	id: string;
	name: string;
	emoji: string | null;
	color: string;
	is_public: boolean;
};

export type CategoriesSlice = {
	byId: Record<string, Category>;
	allIds: string[];
};
