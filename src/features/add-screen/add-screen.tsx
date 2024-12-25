import React from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';

import Root, { StopScroll, Background, Items, NewItem } from './add-screen.styles';

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

			<Root>
				<Items>
					<NewItem>Subscription</NewItem>
					<NewItem>Category</NewItem>
					<NewItem>Application</NewItem>
					<NewItem>Payment methods</NewItem>
				</Items>
			</Root>
		</>
	);
};

export default AddScreen;
