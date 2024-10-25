export const resetLineStyle = (target, maxRows: number) => {
	const lineHeight = Number.parseInt(window.getComputedStyle(target).lineHeight, 10);

	target.style.height = 'auto';
	target.style.height = `${Math.min(lineHeight * 10, target.scrollHeight)}px`;
	target.style.overflowY = 'hidden';
};

const calcLines = (e, maxRows: number) => {
	const lines = e.target.value.split(/\r*\n/).length;

	const lineHeight = Number.parseInt(window.getComputedStyle(e.target).lineHeight, 10);

	e.target.style.height = 'auto';
	e.target.style.height = `${Math.min(lineHeight * maxRows, e.target.scrollHeight)}px`;
	e.target.style.overflowY = lines > maxRows ? 'auto' : 'hidden';
};

export default calcLines;
