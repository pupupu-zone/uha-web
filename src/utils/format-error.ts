import type { ValidationError } from '@tanstack/react-form';

const formatError = (error: ValidationError[]) => {
	return error.join(', ').split(',').filter(Boolean);
};

export default formatError;
