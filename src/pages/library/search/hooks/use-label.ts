import { useMemo } from 'react';
import useScopes from './use-scopes';

const useLabel = () => {
	const scopes = useScopes();

	const label = useMemo(() => {
		if (scopes.length > 1) {
			return 'Search everywhere';
		}

		return `Search in ${scopes[0]}`;
	}, [scopes]);

	return label;
};

export default useLabel;
