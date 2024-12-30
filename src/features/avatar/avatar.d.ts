export type Props = {
	name: string;
	url: string;
	withError: boolean;
	isFetching: boolean;
	onChange: (blobUrl?: string) => void;
};

export type AvatarStyledProps = {
	$gradientId: number;
};
