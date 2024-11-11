import { createLazyFileRoute } from '@tanstack/react-router';
import AnalyticsPage from '@pages/analytics';

export const Route = createLazyFileRoute('/_auth-guard/analytics')({
	component: AnalyticsPage
});
