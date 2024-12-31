import React, { useState, useEffect, useMemo } from 'react';

import useEntity from './use-entity';
import Fuse from 'fuse.js';

import { H1 } from '@ui';
import Root, { Entities } from './entity-picker.styles';
import EntityPreview from './entity-preview';
import { TextField, Input, Popover, SelectValue } from 'react-aria-components';

import type { Props, EntityT } from './entity-picker.d';

const ENTITIES_NAMES = {
	apps: 'Apps', // rename to services
	categories: 'Categories',
	payment_methods: 'Payment methods'
};

const EntityPicker = ({ entity, entityId, onChange }: Props) => {
	const entities = useEntity(entity);
	const [search, setSearch] = useState('');
	const [isSearchMode, setSearchMode] = useState(false);

	const selectedEntity = useMemo(() => {
		return entities.find((entity) => entity.id === entityId);
	}, [entityId, entities]);

	const filteredEntities = useMemo(() => {
		if (!search) return entities;

		const fuse = new Fuse(entities, {
			keys: ['name', 'aliases'],
			threshold: 0.3
		});

		return fuse.search(search).map((result) => result.item);
	}, [search, entities]);

	return (
		<Root>
			{!isSearchMode && <H1 onClick={() => setSearchMode(true)}>{selectedEntity?.name || 'Select...'}</H1>}

			{isSearchMode && (
				<TextField>
					<Input
						value={search}
						onInput={(e) => {
							setSearch(e.target.value);
						}}
						onBlur={() => setSearchMode(false)}
					/>
				</TextField>
			)}

			{isSearchMode && (
				<Entities>
					{filteredEntities.map((entity) => {
						return (
							<H1
								key={entity.id}
								onClick={() => {
									onChange(entity.id);
									setSearch('');
								}}
							>
								{entity.name}
							</H1>
						);
					})}
				</Entities>
			)}
		</Root>
	);
};

export default EntityPicker;
