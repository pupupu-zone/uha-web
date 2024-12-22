import React from 'react';
import { useSelector } from 'react-redux';

import { colorizeWord } from '@utils';
import { categorySelector } from '@data/categories/selectors';

import LogoContent from '@features/logotype';
import Root, { Name, LogoWrap, Info, Category } from './list-item.styles';

import type { Props } from './list-item.d';

const ListItem = (props: Props) => {
	const category = useSelector((store) => categorySelector(store, props.category_id));

	return (
		<Root>
			<LogoWrap $color={props.color || colorizeWord(props.name)}>
				<LogoContent logoUrl={props.logo_url} emoji={props.emoji} name={props.name} size={48} />
			</LogoWrap>

			<Info>
				<Name>{props.name}</Name>

				<Category>{category.name}</Category>
			</Info>
		</Root>
	);
};

export default React.memo(ListItem);
