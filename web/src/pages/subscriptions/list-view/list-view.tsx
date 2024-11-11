import React from 'react';

import { H1, H2, SmallText } from '@ui';
import Root, { StubBlock, SupportImage, Information } from './list-view.styles';

const stubs = [
	{
		country: 'South Korea',
		date: '19.11.2024',
		price: '$30',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kr.svg'
	},
	{
		country: 'North Korea',
		date: '20.11.2024',
		price: '$5',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kp.svg'
	},
	{
		country: 'USA',
		date: '21.11.2024',
		price: '$1',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/us.svg'
	},
	{
		country: 'Russia',
		date: '22.11.2024',
		price: '$300',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/ru.svg'
	},
	{
		country: 'Bulgaria',
		date: '23.11.2024',
		price: '$200',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/bg.svg'
	},
	{
		country: 'Kazakhstan',
		date: '24.11.2024',
		price: '$100',
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
			<H2>November</H2>

			{stubs.map(({ country, date, price, flag }) => (
				<StubBlock key={country}>
					<SupportImage>
						<img src={flag} alt={country} />
					</SupportImage>

					<Information>
						<H2>{country}</H2>

						<SmallText>{date}</SmallText>
					</Information>

					<H1>{price}</H1>
				</StubBlock>
			))}
		</Root>
	);
};

export default ListView;
