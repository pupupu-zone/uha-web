import type { FormApi, Validator, ReactFormApi } from '@tanstack/react-form';
import yup from '@yup';

type Fields = {
	name: string;
	color: string;
	avatar: string; // either avatar_url or logo_url
	logo_url: string;
	aliases: string[];
};

export type Props = {
	form: FormApi<Fields, Validator<unknown, yup.AnySchema>> & ReactFormApi<Fields, Validator<unknown, yup.AnySchema>>;
};
