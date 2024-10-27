import { rootRoute } from './root';
import indexRoute from './main';
import authIdRoute, * as authIdRoutes from './auth-id';

const routeTree = rootRoute.addChildren([
	indexRoute,
	authIdRoute.addChildren([
		authIdRoutes.loginRoute,
		authIdRoutes.twoFactorRoute,
		authIdRoutes.registerRoute,
		authIdRoutes.verifyEmailRoute,
		authIdRoutes.resetPasswordRoute,
		authIdRoutes.setNewPasswordRoute,
		authIdRoutes.logoutRoute
	])
]);

export default routeTree;
