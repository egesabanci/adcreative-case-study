import { UseQueryResult } from 'react-query';
import { Character } from '../models';
import SearchItem from './SearchItem';

// TODO: refactor component
const Table = ({
	items,
}: {
	items: UseQueryResult<Character[]> | undefined;
}) => {
	return (
		<div className='w-full h-full hide-scrollbar bg-white rounded-lg flex flex-col items-center justify-start overflow-scroll overflow-x-hidden'>
			{items?.data && items.data.length > 0 ? (
				items.data.map((item, index) => <SearchItem item={item} key={index} />)
			) : (
				<h1 className='font-bold text-gray-300'>
					the characters you selected will appear here
				</h1>
			)}
		</div>
	);
};

export default Table;
