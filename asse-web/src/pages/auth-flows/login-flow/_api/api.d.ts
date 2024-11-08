import type { UserProfile } from '@features/user-profile/_types';

export type LoginReqT = {
	email: string;
	password: string;
};
type LoginResErrorT = {
	code: 1000 | 1001 | 1002 | 1003 | 1004 | 1005;
};
export type LoginResSuccessT = UserProfile;
