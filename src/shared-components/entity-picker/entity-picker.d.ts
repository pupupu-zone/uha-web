export type Props = {
	entity: 'categories' | 'apps' | 'payment_methods';
	entityId: string;
	onChange: (entityId: string) => void;
};
