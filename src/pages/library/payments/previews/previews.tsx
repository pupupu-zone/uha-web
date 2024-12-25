import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/payments/selectors';

import ShowMore from '@pages/library/show-more';
import PreviewItem from './preview-item';
import Root from './previews.styles';

const PaymentPreviews = () => {
	const payments = useSelector(previewSelector);

	return (
		<Root>
			{payments.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{payments.length >= 6 && <ShowMore to="/library/payments" />}
		</Root>
	);
};

export default PaymentPreviews;
