import { useState } from 'react';

import Table from './Table';
import { getAllCharacters } from '../network';
import { useQuery } from 'react-query';

const Multiselect = () => {
	const [search, setSearch] = useState('');

	const query = useQuery('allCharacters', getAllCharacters);

	return (
		<div className='w-screen lg:w-1/3 px-[25px] lg:px-0 h-auto min-h-[50px] flex flex-col items-center justify-center gap-y-[15px]'>
			<h1 className='text-white text-3xl font-bold mb-[25px]'>
				Rick and Morty | Search
			</h1>

			<input
				className='w-full h-full outline-none bg-white text-black py-[15px] px-[20px] rounded-lg'
				placeholder='search'
				onChange={(e) => setSearch(e.target.value)}
			/>

			<Table items={query} />
		</div>
	);
};

export default Multiselect;
