/* eslint-disable @typescript-eslint/no-explicit-any */

const sort =
	(property: string) =>
	<T extends Record<string, any>>(a: T, b: T) => {
		if (a[property] < b[property]) return -1;
		if (a[property] > b[property]) return 1;

		return 0;
	};

const sortBy = <T extends Record<string, any>>(arr: T[], property: string) => {
	const sortFn = sort(property);

	return arr.toSorted((a, b) => sortFn<T>(a, b));
};

export default sortBy;
