import type { UserProfile } from '@data/user';

// Get profile info
export type UserProfileReqT = void;
export type UserProfileResT = UserProfile;

// Update profile
export type UserUpdateResT = unknown;
export type UserUpdateReqT = FormData<{
	avatar?: File;
	name?: string;
}>;
