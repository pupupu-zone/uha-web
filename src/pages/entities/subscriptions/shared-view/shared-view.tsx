import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Text, Button } from '@ui';
import AvatarPicker from '@shared/avatar-picker';
import EntityPicker from '@shared/entity-picker';
import Root, { Main, ColorPreview, NameInput, FieldCaption } from './shared-view.styles';

import { useIsTextDark } from '@hooks';
import { useStore } from '@tanstack/react-form';
import { appSelector } from '@data/applications/selectors';

import type { Props } from './shared-view.d';

const AppSharedView = ({ form }: Props) => {
	const appId = useStore(form.store, (state) => state.values.app_id);
	const application = useSelector((store) => appSelector(store, appId)) || { color: '#fafafa' };

	const appTitle = useStore(form.store, (state) => state.values.name);
	const isTextDark = useIsTextDark(application.color, 1);

	useEffect(() => {
		if (!application?.category_id) return;

		form.setFieldValue('category_id', application.category_id);
		form.setFieldValue('name', application.name);
	}, [appId]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<>
			<ColorPreview $color={application.color} />

			<Root onSubmit={onSubmit} noValidate>
				<AvatarPicker name={appTitle} url={application.logo_url || ''} isReadOnly />

				<form.Field name="name">
					{(field) => {
						const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
							field.handleChange(e.target.value);
						};

						return (
							<NameInput
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
								$isTextDark={isTextDark}
								value={field.state.value}
								onChange={onChangeHd}
								placeholder="App name"
							/>
						);
					}}
				</form.Field>

				<Main>
					<form.Field name="app_id">
						{(field) => {
							const onChangeHd = (nextAppId: string) => {
								field.handleChange(nextAppId);
							};

							return (
								<div>
									<FieldCaption $isTextDark={isTextDark}>Application</FieldCaption>
									<EntityPicker
										isTextDark={isTextDark}
										entity="apps"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</div>
							);
						}}
					</form.Field>

					<form.Field name="category_id">
						{(field) => {
							const onChangeHd = (nextCategoryId: string) => {
								field.handleChange(nextCategoryId);
							};

							return (
								<div>
									<FieldCaption $isTextDark={isTextDark}>Category</FieldCaption>

									<EntityPicker
										isTextDark={isTextDark}
										entity="categories"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</div>
							);
						}}
					</form.Field>

					<form.Field name="payment_method_id">
						{(field) => {
							const onChangeHd = (nextCategoryId: string) => {
								field.handleChange(nextCategoryId);
							};

							return (
								<div>
									<FieldCaption $isTextDark={isTextDark}>Payment Method</FieldCaption>

									<EntityPicker
										isTextDark={isTextDark}
										entity="payment_methods"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</div>
							);
						}}
					</form.Field>

					<form.Field name="interval_type">
						{(field) => {
							const onChangeHd = (nextIntervalType: string) => {
								field.handleChange(nextIntervalType);
							};

							return (
								<div>
									<FieldCaption $isTextDark={isTextDark}>Interval</FieldCaption>

									<EntityPicker
										isTextDark={isTextDark}
										entity="intervals"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</div>
							);
						}}
					</form.Field>

					<div>
						<FieldCaption $isTextDark={isTextDark}>Price</FieldCaption>
					</div>

					<form.Field name="currency">
						{(field) => {
							const onChangeHd = (nextCurrency: string) => {
								field.handleChange(nextCurrency);
							};

							return (
								<div>
									<FieldCaption $isTextDark={isTextDark}>Currency</FieldCaption>

									<EntityPicker
										isTextDark={isTextDark}
										entity="currencies"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</div>
							);
						}}
					</form.Field>

					<div>
						<FieldCaption $isTextDark={isTextDark}>First Payment</FieldCaption>
					</div>

					<div>
						<FieldCaption $isTextDark={isTextDark}>Next Payment</FieldCaption>
					</div>
				</Main>

				<Button isFullWidth isGlowing type="submit">
					Create
				</Button>
			</Root>
		</>
	);
};

export default AppSharedView;
