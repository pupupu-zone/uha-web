import React from 'react';
import { FontStyles, ResetStyles, GeneralStyles } from '@src/core/styles';
import { H1, H2, H3, SmallText, Text, LargeText } from './typography';
import type { StoryObj } from '@storybook/react';

export const Headers: StoryObj<typeof H1> = {
	render: (args) => {
		return (
			<>
				<ResetStyles />
				<FontStyles />
				<GeneralStyles />

				<H1 {...args}>(H1) The quick brown fox jumps over the lazy dog</H1>
				<H2 {...args}>(H2) The quick brown fox jumps over the lazy dog</H2>
				<H3 {...args}>(H3) The quick brown fox jumps over the lazy dog</H3>
			</>
		);
	}
};

export const RegularText: StoryObj<typeof Text> = {
	render: (args) => {
		return (
			<>
				<ResetStyles />
				<FontStyles />
				<GeneralStyles />

				<SmallText>(SmallText) The quick brown fox jumps over the lazy dog</SmallText>
				<br />
				<SmallText $bold>(SmallText) The quick brown fox jumps over the lazy dog</SmallText>
				<br />
				<Text>(Text) The quick brown fox jumps over the lazy dog</Text>
				<br />
				<Text $bold>(Text) The quick brown fox jumps over the lazy dog</Text>
				<br />
				<LargeText>(LargeText) The quick brown fox jumps over the lazy dog</LargeText>
				<br />
				<LargeText $bold>(LargeText) The quick brown fox jumps over the lazy dog</LargeText>
			</>
		);
	}
};

export default {};
