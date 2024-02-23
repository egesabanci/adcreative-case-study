import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { UseQueryResult } from 'react-query';

import { Character } from '../models';
import SelectedItem from './SelectedItem';

const Table = ({
	items,
}: {
	items: UseQueryResult<Character[]> | undefined;
}) => {
	return (
		<div
			className={clsx(
				items?.data && items.data.length > 0
					? 'justify-start'
					: 'justify-center',
				'w-full h-full hide-scrollbar bg-white rounded-lg flex flex-col items-center overflow-scroll overflow-x-hidden'
			)}>
			{items?.isLoading ? (
				<Loader2 className='animate-spin text-black' size={24} />
			) : items?.data && items.data.length > 0 ? (
				items.data.map((item, index) => (
					<SelectedItem item={item} key={index} />
				))
			) : (
				<h1 className='font-bold text-gray-300'>
					the characters you selected will appear here
				</h1>
			)}
		</div>
	);
};

export default Table;
