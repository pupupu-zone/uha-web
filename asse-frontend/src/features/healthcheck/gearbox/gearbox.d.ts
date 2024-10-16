export type CheckHistoryT = {
	id: string;
	status: boolean;
};

export type HealthCheckStateT = {
	history: CheckHistoryT[];
};
