import React from 'react';

export type Props = {
	maxRows?: number;
	onInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
