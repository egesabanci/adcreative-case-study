import { useState } from 'react';
import { useQuery } from 'react-query';

import Table from './Table';
import { Character } from '../models';
import {
	getAllCharacters,
	getCharactersById,
	getCharactersByName,
} from '../network';
import { Pagination as PaginationEnum } from '../enums';
import SearchBarItem from './SearchBarItem';
import Pagination from './Pagination';
import SearchItem from './SearchItem';

const Multiselect = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

	const handlePagination = (action: PaginationEnum) => {
		setPage((prev) =>
			prev + action.valueOf() >= 1 ? prev + action.valueOf() : prev
		);
	};

	const handleSelect = (item: Character) => {
		setSelectedCharacters((prev) =>
			!prev.map((selected) => selected.character.id).includes(item.character.id)
				? [...prev, item]
				: prev
		);
	};

	const handleUnselect = (id: string) => {
		setSelectedCharacters((prev) => prev.filter((x) => x.character.id !== id));
	};

	const allCharactersQuery = useQuery(['allCharacters', page], () =>
		getAllCharacters(page.toString())
	);

	const searchCharactersQuery = useQuery(
		['searchCharacters', search],
		() => getCharactersByName(search),
		{ enabled: search !== '' }
	);

	const selectedCharactersQuery = useQuery(
		['selectedCharacters', selectedCharacters],
		() =>
			getCharactersById(selectedCharacters.map((item) => item.character.id)),
		{ enabled: selectedCharacters.length > 0 }
	);

	return (
		<div className='w-full h-full grid grid-cols-2 p-[25px] lg:p-[50px] gap-[25px]'>
			<div className='w-full max-h-[400px]'>
				{/* Search  */}
				<div className='w-full h-auto max-h-[75px] hide-scrollbar overflow-scroll overflow-x-hidden flex flex-wrap items-center justify-start bg-white rounded-lg p-[15px] gap-[10px]'>
					{selectedCharacters &&
						selectedCharacters.length > 0 &&
						selectedCharacters.map((item, index) => (
							<SearchBarItem
								onClick={() => handleUnselect(item.character.id)}
								item={item}
								key={index}
							/>
						))}
					<input
						className='w-auto h-auto outline-none text-black'
						placeholder='search'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				{/* Search Modal */}
				<div className='w-full h-full overflow-scroll hide-scrollbar bg-gray-100 mt-[10px] rounded-lg items-center justify-center'>
					<>
						{search === '' && (
							<Pagination
								increment={() => handlePagination(PaginationEnum.INCREMENT)}
								decrement={() => handlePagination(PaginationEnum.DECREMENT)}
								page={page.toString()}
							/>
						)}
						{(search !== ''
							? searchCharactersQuery
							: allCharactersQuery
						).data?.map((item, index) => (
							<SearchItem
								search={search}
								onClick={() => handleSelect(item)}
								item={item}
								key={index}
								checked={selectedCharacters
									.map((selected) => selected.character.id)
									.includes(item.character.id)}
							/>
						))}
					</>
				</div>
			</div>
			<div className='w-full h-[400px]'>
				{selectedCharacters && selectedCharacters.length > 0 && (
					<div className='w-full h-auto flex items-center justify-start mb-[10px] gap-x-[5px] text-white'>
						<p>Selected character(s): </p>
						<p>{selectedCharacters.length}</p>
					</div>
				)}
				<Table items={selectedCharactersQuery} />
			</div>
		</div>
	);
};

export default Multiselect;
