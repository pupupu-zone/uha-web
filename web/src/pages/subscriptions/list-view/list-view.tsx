import React from 'react';

import { H1, H2, H3, SmallText } from '@ui';
import Root, { StubBlock, SupportImage, Information } from './list-view.styles';

const stubs = [
	{
		country: 'South Korea',
		date: '19.11.2024',
		price: '$32.2',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kr.svg'
	},
	{
		country: 'North Korea',
		date: '20.11.2024',
		price: '$5.34',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kp.svg'
	},
	{
		country: 'USA',
		date: '21.11.2024',
		price: '$1000',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/us.svg'
	},
	{
		country: 'Russia',
		date: '22.11.2024',
		price: '$14.60',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/ru.svg'
	},
	{
		country: 'Bulgaria',
		date: '23.11.2024',
		price: '$4.25',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/bg.svg'
	},
	{
		country: 'Kazakhstan',
		date: '24.11.2024',
		price: '$478',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kz.svg'
	},
	{
		country: 'Vatican',
		date: '24.11.2024',
		price: '$100',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/va.svg'
	}
];

const ListView = () => {
	return (
		<Root>
			<H1>November</H1>

			{stubs.map(({ country, date, price, flag }) => (
				<StubBlock key={country}>
					<SupportImage>
						<img src={flag} alt={country} />
					</SupportImage>

					<Information>
						<H3>{country}</H3>

						<SmallText>{date}</SmallText>
					</Information>

					<H2>{price}</H2>
				</StubBlock>
			))}
		</Root>
	);
};

export default ListView;
