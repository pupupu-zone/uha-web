import type { UserProfile } from '@data/user';

// Get profile info
export type UserProfileReqT = void;
export type UserProfileResT = UserProfile;

// Update profile
export type UserUpdateReqT = FormData<{
	avatar?: File;
	name?: string;
}>;
type UserUpdateResErrT = {
	code: 1013 | 1012 | 1011 | 1000;
};
export type UserUpdateResT = UserProfile;
