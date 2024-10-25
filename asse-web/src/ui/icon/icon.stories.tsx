import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';
import allIconsList from './icons-list';

const iconsList = Object.keys(allIconsList) as (keyof typeof allIconsList)[];

const IconBox = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 4px;
	padding: 10px;
`;

const IconTitle = styled.p`
	font-family: 'Nunito Sans';
`;

const IconWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Root = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 10px;
	grid-row-gap: 10px;

	padding: 40px;
`;

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: 'Docs/Icon',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true }
	},
	argTypes: {
		name: {
			description: 'One of the icon names from the list of icons available in the Icon component.',
			defaultValue: 'add',
			control: { type: 'select' },
			options: iconsList,
			type: { name: 'string', required: true },
			table: { defaultValue: { summary: 'add' } }
		},
		width: {
			description: 'width & height must be set simultaneously',
			defaultValue: 24,
			control: { type: 'number' },
			type: { name: 'number', required: false }
		},
		height: {
			description: 'width & height must be set simultaneously',
			defaultValue: 24,
			control: { type: 'number' },
			type: { name: 'number', required: false }
		}
	},
	args: {
		name: 'add',
		width: 24,
		height: 24
	}
};

export const AllIcons: StoryObj<typeof Icon> = {
	parameters: {
		title: 'All Icons',
		docs: {
			description: {
				story: 'List of entire icon set'
			}
		}
	},
	render: (args) => {
		return (
			<Root>
				{iconsList.map((name) => (
					<IconWrap key={name}>
						<IconBox>
							<Icon name={name} width={args.width} height={args.height} />
						</IconBox>

						<IconTitle>{name}</IconTitle>
					</IconWrap>
				))}
			</Root>
		);
	}
};

export default meta;
