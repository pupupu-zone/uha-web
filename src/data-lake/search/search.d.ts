export type ScopesT = Array<'categories' | 'applications' | 'payments'>;

export type SearchSlice = {
	query: string;
	scopes: ScopesT;
};
