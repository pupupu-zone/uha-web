import type { FormApi, Validator, ReactFormApi } from '@tanstack/react-form';
import yup from '@yup';

type Fields = {
	emoji: string;
	name: string;
	color: string;
};

export type Props = {
	form: FormApi<Fields, Validator<unknown, yup.AnySchema>> & ReactFormApi<Fields, Validator<unknown, yup.AnySchema>>;
};
