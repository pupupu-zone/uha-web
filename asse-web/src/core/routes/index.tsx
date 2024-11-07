import React from 'react';
import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => {
		return <Outlet />;
	},
	beforeLoad: ({ context, location }) => {
		if (context.isAuthorized) {
			throw redirect({
				to: '/app'
			});
		}

		throw redirect({
			to: '/id'
		});
	}
});
