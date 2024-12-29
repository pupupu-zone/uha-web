import React from 'react';

import { useAddCategory } from './_hooks';
import PaymentsSharedView from '@pages/entities/payments/shared-view';

const AddPayment = () => {
	const { form } = useAddCategory();

	return <PaymentsSharedView form={form} />;
};

export default AddPayment;
