import React from 'react';

import { H1 } from '@ui';
import SubCard from '../sub-card';
import Root from './list-view.styles';

const stubs = [
	{
		country: 'South Korea',
		date: '2024-11-19',
		price: '$32.2',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kr.svg'
	},
	{
		country: 'North Korea',
		date: '2024-11-21',
		price: '$5.34',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kp.svg'
	},
	{
		country: 'USA',
		date: '2024-11-22',
		price: '$1000',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/us.svg'
	},
	{
		country: 'Russia',
		date: '2024-11-23',
		price: '$14.60',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/ru.svg'
	},
	{
		country: 'Bulgaria',
		date: '2024-11-24',
		price: '$4.25',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/bg.svg'
	},
	{
		country: 'Kazakhstan',
		date: '2024-11-25',
		price: '$478',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/kz.svg'
	},
	{
		country: 'Vatican',
		date: '2024-11-26',
		price: '$100',
		flag: 'https://s3.keireira.com/subsawwy-demo/flags/va.svg'
	}
];

const ListView = () => {
	return (
		<Root>
			<H1>November</H1>

			{stubs.map(({ country, date, price, flag }) => (
				<SubCard key={country} imgSrc={flag} title={country} price={price} nextDate={date} />
			))}
		</Root>
	);
};

export default ListView;
