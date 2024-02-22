import { UseQueryResult } from 'react-query';
import { Character } from '../models';

const Table = ({
	items,
}: {
	items: UseQueryResult<Character[]> | undefined;
}) => {
	return (
		<div className='w-full h-[300px] hide-scrollbar bg-white rounded-lg flex flex-col items-center justify-center overflow-scroll overflow-x-hidden'>
			{items?.data && items.data.length > 0 ? (
				items.data.map((item, index) => (
					<h1 key={index}>{item.character.name}</h1>
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
