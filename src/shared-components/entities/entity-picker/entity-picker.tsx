import React, { useState, useMemo, useRef } from 'react';

import Fuse from 'fuse.js';
import useEntity from './use-entity';
import { useOnClickOutside } from '@hooks';

import { HorizontalScroll } from '@ui';
import { TextField as AriaTextField } from 'react-aria-components';
import Root, { Entities, Input, Button } from './entity-picker.styles';

import type { Props } from './entity-picker.d';

const ENTITY_NAMES = {
	categories: 'category',
	apps: 'app',
	payment_methods: 'method',
	intervals: 'interval',
	currencies: 'currency'
};

const EntityPicker = ({ isTextDark, entity, entityId, onChange }: Props) => {
	const ref = useRef(null);
	const entities = useEntity(entity);
	const [search, setSearch] = useState('');
	const [isSearchMode, setSearchMode] = useState(false);

	useOnClickOutside([ref], () => {
		setSearchMode(false);
	});

	const selectedEntity = useMemo(() => {
		return entities.find((entity) => entity.id === entityId);
	}, [entityId, entities]);

	const fuse = useMemo(() => {
		const searcher = new Fuse(entities, {
			keys: ['name', 'aliases'],
			threshold: 0.3
		});

		return searcher;
	}, [entities]);

	const filteredEntities = useMemo(() => {
		if (!search) return entities;

		return fuse.search(search).map((result) => result.item);
	}, [fuse, search, entities]);

	const selectEntity = (entityId: string) => {
		onChange(entityId);
		setSearch('');
		setSearchMode(false);
	};

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value.trim());
	};

	const isSelected = Boolean(selectedEntity?.name);

	return (
		<Root ref={ref}>
			{isSearchMode && (
				<>
					{filteredEntities.length > 0 && (
						<HorizontalScroll as={Entities}>
							{filteredEntities.map((entity) => (
								<Button
									$isSelected
									$isTextDark={isTextDark}
									$isSearchMode={isSearchMode}
									key={entity.id}
									onPress={() => selectEntity(entity.id)}
								>
									{entity.name}
								</Button>
							))}
						</HorizontalScroll>
					)}

					{!filteredEntities.length && (
						<HorizontalScroll as={Entities}>
							<Button $isTextDark={isTextDark} $isSearchMode={isSearchMode} isDisabled>
								No results found
							</Button>
						</HorizontalScroll>
					)}

					<AriaTextField value={search} onInput={onSearch}>
						<Input
							$isTextDark={isTextDark}
							placeholder={selectedEntity?.name || `Search for ${ENTITY_NAMES[entity]}`}
						/>
					</AriaTextField>
				</>
			)}

			{!isSearchMode && (
				<Button
					$isSelected={isSelected}
					$isTextDark={isTextDark}
					$isSearchMode={isSearchMode}
					onPress={() => setSearchMode(true)}
				>
					{selectedEntity?.name || `Select ${ENTITY_NAMES[entity]}`}
				</Button>
			)}
		</Root>
	);
};

export default EntityPicker;
