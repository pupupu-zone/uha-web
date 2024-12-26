import React from 'react';

export type AdderProps = React.PropsWithChildren<{
	to: string;
	onBeforeNavigate: (to: string) => void;
}>;
