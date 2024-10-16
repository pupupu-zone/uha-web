import type { HealthCheckStateT } from './gearbox.d';

const healthCheckSelector = (state: HealthCheckStateT) => {
	return state;
};

export default {
	healthCheckSelector
};
