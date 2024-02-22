import { UseQueryResult } from 'react-query';
import { Character } from '../models';

const Table = ({ items }: { items: UseQueryResult<Character[]> }) => {
	return (
		<div className='w-full h-auto min-h-[300px] bg-white rounded-lg flex flex-col items-center justify-center overflow-scroll overflow-x-hidden'>
			{items.data &&
				items.data.map((item, index) => (
					<h1 key={index}>{item.character.name}</h1>
				))}
		</div>
	);
};

export default Table;
