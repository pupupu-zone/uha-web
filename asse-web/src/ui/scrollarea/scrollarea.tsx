import React from 'react';
import { CustomScroll } from 'react-custom-scroll';

import type { Props } from './scrollarea.d';
import { ScrollAreaStyles } from './scrollarea.styles';

const ScrollArea = ({ children, ...restProps }: Props) => {
	return (
		<>
			<CustomScroll
				allowOuterScroll={false}
				freezePosition={false}
				heightRelativeToParent="100%"
				handleClass="custom-scroll-handler"
				{...restProps}
			>
				{children}
			</CustomScroll>

			<ScrollAreaStyles />
		</>
	);
};

export default ScrollArea;
