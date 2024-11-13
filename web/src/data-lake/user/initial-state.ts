import type { UserSlice } from './user.d';

const initialState: UserSlice = {
	id: undefined,
	data: {},
	settings: {
		theme: 'System',
		default_currency: 'USD',
		do_recalc: true
	}
};

export default initialState;
