import type { FormApi, Validator, ReactFormApi } from '@tanstack/react-form';
import yup from '@yup';

type Fields = {
	name: string;
	color: string;
	avatar: string;
	aliases: string[];
	category_id: string;
};

export type Props = {
	form: FormApi<Fields, Validator<unknown, yup.AnySchema>> & ReactFormApi<Fields, Validator<unknown, yup.AnySchema>>;
};
