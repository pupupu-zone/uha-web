import React, { useState, useMemo, useRef, useEffect } from 'react';

import Fuse from 'fuse.js';
import useEntity from './use-entity';
import { useOnClickOutside } from '@hooks';

import { HorizontalScroll } from '@ui';
import Root, { Entities, Input, Button } from './entity-picker.styles';
import { TextField as AriaTextField } from 'react-aria-components';

import type { Props } from './entity-picker.d';

const ENTITY_NAMES = {
	categories: 'category',
	apps: 'app',
	payment_methods: 'method'
};

const EntityPicker = ({ isTextDark, entity, entityId, onChange }: Props) => {
	const entities = useEntity(entity);
	const [search, setSearch] = useState('');
	const [isSearchMode, setSearchMode] = useState(false);
	const ref = useRef(null);
	const inputRef = useRef(null);

	useOnClickOutside([ref], () => {
		setSearchMode(false);
	});

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

	useEffect(() => {
		if (!isSearchMode) return;

		inputRef.current?.focus();
	}, [isSearchMode]);

	const isSelected = Boolean(selectedEntity?.name);

	return (
		<Root ref={ref}>
			{!isSearchMode && (
				<Button $isTextDark={isTextDark} $isSelected={isSelected} onPress={() => setSearchMode(true)}>
					{selectedEntity?.name || `Select ${ENTITY_NAMES[entity]}`}
				</Button>
			)}

			{isSearchMode && (
				<AriaTextField
					value={search}
					onInput={(e) => {
						setSearch(e.target.value.trim());
					}}
				>
					<Input
						ref={inputRef}
						$isTextDark={isTextDark}
						placeholder={selectedEntity?.name || `Search for ${ENTITY_NAMES[entity]}`}
					/>
				</AriaTextField>
			)}

			{isSearchMode && filteredEntities.length > 0 && (
				<HorizontalScroll as={Entities}>
					{filteredEntities.map((entity) => {
						return (
							<Button
								$isSelected
								$isTextDark={isTextDark}
								key={entity.id}
								onPress={(e) => {
									onChange(entity.id);
									setSearch('');
									setSearchMode(false);
								}}
							>
								{entity.name}
							</Button>
						);
					})}
				</HorizontalScroll>
			)}

			{isSearchMode && !filteredEntities.length && (
				<HorizontalScroll as={Entities}>
					<Button $isTextDark={isTextDark} isDisabled>
						No results found
					</Button>
				</HorizontalScroll>
			)}
		</Root>
	);
};

export default EntityPicker;
