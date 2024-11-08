export type Props = {
	type: 'blank' | 'error' | 'success';
	message: string;
};

export type StyleProps = {
	$type: Props['type'];
};
