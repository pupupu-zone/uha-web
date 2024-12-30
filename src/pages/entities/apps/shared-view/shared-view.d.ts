import type { FormApi, Validator, ReactFormApi } from '@tanstack/react-form';
import yup from '@yup';

type Fields = {
	name: string;
	color: string;
	avatar: string;
	logo_url: string;
	aliases: string[];
};

export type Props = {
	form: FormApi<Fields, Validator<unknown, yup.AnySchema>> & ReactFormApi<Fields, Validator<unknown, yup.AnySchema>>;
};
