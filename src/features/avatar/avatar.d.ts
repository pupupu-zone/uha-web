export type Props = {
	name: string;
	url: string;
	withError: boolean;
	isFetching: boolean;
	onChange: (file: File) => void;
};

export type AvatarStyledProps = {
	$gradientId: number;
};
