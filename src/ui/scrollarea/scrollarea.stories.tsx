import React from 'react';
import type { StoryObj } from '@storybook/react';

import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';
import ScrollArea from './scrollarea';

const meta = {
	component: ScrollArea,
	title: 'Docs/ScrollArea',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true }
	},
	args: {}
};

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: StoryObj<typeof ScrollArea> = {
	render: (args) => {
		return (
			<>
				<ResetStyles />
				<FontStyles />
				<GeneralStyles />

				<div style={{ height: '200px', width: '200px', border: '1px solid #000' }}>
					<ScrollArea>
						<div style={{ padding: '15px 20px' }}>
							<div className="Text">Tags</div>
							{TAGS.map((tag) => (
								<div className="Tag" key={tag}>
									{tag}
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</>
		);
	}
};

export default meta;
