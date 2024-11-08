export type Props = {
	type: 'blank' | 'error' | 'success';
	message: string;
	ariaProps: {
		'aria-live': 'polite' | 'assertive';
		role: 'status' | 'alert';
	};
};

export type StyleProps = {
	$type: Props['type'];
};
