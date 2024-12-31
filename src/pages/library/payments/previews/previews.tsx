import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/payments/selectors';

import { HorizontalScroll } from '@ui';
import PreviewItem from './preview-item';
import ShowMore from '@pages/library/show-more';

const PaymentPreviews = () => {
	const payments = useSelector(previewSelector);

	return (
		<HorizontalScroll>
			{payments.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{payments.length >= 6 && <ShowMore to="/library/payments" />}
		</HorizontalScroll>
	);
};

export default PaymentPreviews;
