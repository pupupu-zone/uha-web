const ROUTES = {
	ROOT: '/'
};

export const createRoute = (route: string, params: object, search?: string) => {
	const formattedRoute = Object.entries(params).reduce((acc, [key, value]) => {
		return acc.replace(`:${key}`, value);
	}, route);

	return `${formattedRoute}${search ? search : ''}`;
};

export default ROUTES;
