import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@ui';
import AvatarPicker from '@shared/avatar-picker';
import Root, { Main, ColorPreview } from './shared-view.styles';
import { EntityRoot, EntityInput, EntityPicker, EntityCaption } from '@shared/entities';

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
							<EntityInput
								isTextDark={isTextDark}
								align="center"
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
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
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Application" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="apps"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="category_id">
						{(field) => {
							const onChangeHd = (nextCategoryId: string) => {
								field.handleChange(nextCategoryId);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Category" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="categories"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="payment_method_id">
						{(field) => {
							const onChangeHd = (nextCategoryId: string) => {
								field.handleChange(nextCategoryId);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Payment Method" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="payment_methods"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="interval_type">
						{(field) => {
							const onChangeHd = (nextIntervalType: string) => {
								field.handleChange(nextIntervalType);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Interval" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="intervals"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<EntityRoot>
						<EntityCaption isTextDark={isTextDark} title="Price" />

						<EntityInput isTextDark={isTextDark} type="number" placeholder="100" />
					</EntityRoot>

					<form.Field name="currency">
						{(field) => {
							const onChangeHd = (nextCurrency: string) => {
								field.handleChange(nextCurrency);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Currency" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="currencies"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<EntityRoot>
						<EntityCaption isTextDark={isTextDark} title="First Payment" />
					</EntityRoot>

					<EntityRoot>
						<EntityCaption isTextDark={isTextDark} title="Next Payment" />
					</EntityRoot>
				</Main>

				<Button isFullWidth isGlowing type="submit">
					Create
				</Button>
			</Root>
		</>
	);
};

export default AppSharedView;
