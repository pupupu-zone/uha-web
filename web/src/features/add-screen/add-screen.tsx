import React from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';

import { StopScroll, Background } from './add-screen.styles';

const AddScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClose = () => {
		const searchParams = location.search;
		delete searchParams['action'];

		navigate({
			to: location.pathname,
			search: searchParams
		});
	};

	return (
		<>
			<StopScroll />
			<Background onClick={handleClose} />

			<div>
				<div>Subscription</div>
				<div>Category</div>
				<div>Application</div>
				<div>Payment methods</div>
			</div>
		</>
	);
};

export default AddScreen;
