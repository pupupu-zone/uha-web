import React, { useState } from 'react';

import { HorizontalScroll } from '@ui';
import Root, { Input, Tags, Tag } from './tags-input.styles';
import { TextField as AriaTextField } from 'react-aria-components';

import type { Props } from './tags-input.d';

const TagsInput = ({ isTextDark, tags = [], onChange }: Props) => {
	const [alias, setAlias] = useState('');

	return (
		<Root>
			{tags.length > 0 && (
				<HorizontalScroll as={Tags}>
					{tags.map((tag) => (
						<Tag key={tag} $isTextDark={isTextDark}>
							{tag}
						</Tag>
					))}
				</HorizontalScroll>
			)}

			<AriaTextField
				value={alias}
				onInput={(e) => {
					setAlias(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key !== 'Enter') return;

					e.preventDefault();
					const aliases = [alias, ...tags];
					const set = new Set(aliases);
					onChange(Array.from(set));
					setAlias('');
				}}
			>
				<Input $isTextDark={isTextDark} placeholder="Red tag" />
			</AriaTextField>
		</Root>
	);
};

export default TagsInput;
