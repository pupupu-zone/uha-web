import React, { useState, useEffect, useMemo } from 'react';

import useEntity from './use-entity';
import Fuse from 'fuse.js';

import { H1, HorizontalScroll } from '@ui';
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

	const fuse = useMemo(() => {
		return new Fuse(entities, {
			keys: ['name', 'aliases'],
			threshold: 0.3
		});
	}, [entities]);

	const filteredEntities = useMemo(() => {
		if (!search) return entities;

		return fuse.search(search).map((result) => result.item);
	}, [fuse, search, entities]);

	return (
		<Root>
			{!isSearchMode && <H1 onClick={() => setSearchMode(true)}>{selectedEntity?.name || 'Select...'}</H1>}

			{isSearchMode && (
				<TextField>
					<Input
						value={search}
						placeholder={selectedEntity?.name || 'Search...'}
						onInput={(e) => {
							setSearch(e.target.value);
						}}
						onBlur={() => setSearchMode(false)}
					/>
				</TextField>
			)}

			{isSearchMode && (
				<HorizontalScroll as={Entities}>
					{filteredEntities.map((entity) => {
						return (
							<H1
								key={entity.id}
								onClick={() => {
									onChange(entity.id);
									setSearch('');
									setSearchMode(false);
								}}
							>
								{entity.name}
							</H1>
						);
					})}
				</HorizontalScroll>
			)}
		</Root>
	);
};

export default EntityPicker;
