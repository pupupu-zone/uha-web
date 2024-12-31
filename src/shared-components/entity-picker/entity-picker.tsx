import React from 'react';

import useEntity from './use-entity';

import Root, { Select, SelectWrapper } from './entity-picker.styles';
import EntityPreview from './entity-preview';
import { ListBox, ListBoxItem, Popover, SelectValue } from 'react-aria-components';

import type { Props, EntityT } from './entity-picker.d';

const ENTITIES_NAMES = {
	apps: 'Apps', // rename to services
	categories: 'Categories',
	payment_methods: 'Payment methods'
};

const EntityPicker = ({ entity, entityId, onChange }: Props) => {
	const entities = useEntity(entity);

	return (
		<Root>
			<Select aria-label={ENTITIES_NAMES[entity] || ''} onSelectionChange={console.log}>
				<SelectWrapper>
					<SelectValue>
						{({ selectedItem }) => {
							const item = selectedItem as EntityT;

							if (!item) {
								return <div>select</div>;
							}

							return <EntityPreview name={item.name} emoji={item.emoji} logoUrl={item.logo_url} color={item.color} />;
						}}
					</SelectValue>
				</SelectWrapper>

				<Popover>
					<ListBox>
						{entities.map((entity) => {
							return (
								<ListBoxItem key={entity.id} id={entity.id} textValue={entity.name} value={entity}>
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
