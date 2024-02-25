import clsx from 'clsx';
import { UseQueryResult } from 'react-query';
import { BadgePlus, Loader2 } from 'lucide-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { Character } from '../models';
import SelectedItem from './SelectedItem';

const Table = ({
	items,
}: {
	items: UseQueryResult<Character[]> | undefined;
}) => {
	const [parent] = useAutoAnimate();

	return (
		<div
			ref={parent}
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
				<span className='flex flex-col items-center justify-center gap-y-[10px] px-[25px] text-center'>
					<BadgePlus className='text-gray-300' size={48} />
					<h1 className='font-bold text-gray-300'>
						the characters you selected will appear here
					</h1>
				</span>
			)}
		</div>
	);
};

export default Table;
