import React from 'react';

import useEntity from './use-entity';

import Root from './entity-picker.styles';
import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components';

import type { Props } from './entity-picker.d';

const ENTITIES_NAMES = {
	apps: 'Apps',
	categories: 'Categories',
	payment_methods: 'Payment methods'
};

const EntityPicker = ({ entity, entityId, onChange }: Props) => {
	const entities = useEntity(entity);

	return (
		<Root>
			<Select aria-label={ENTITIES_NAMES[entity] || ''} onSelectionChange={console.log}>
				<Button>
					<SelectValue />
				</Button>

				<Popover>
					<ListBox>
						{entities.map((entity) => {
							return (
								<ListBoxItem key={entity.id} id={entity.id}>
									{entity.name}
								</ListBoxItem>
							);
						})}
					</ListBox>
				</Popover>
			</Select>
		</Root>
	);
};

export default EntityPicker;
