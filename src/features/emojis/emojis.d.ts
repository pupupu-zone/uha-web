export type Props = {
	maxRows?: number;
	set: 'categories' | 'methods';
	color?: string;
	onChange: (nextEmoji: string) => void;
};
