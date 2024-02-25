import { useState } from 'react';
import { useQuery } from 'react-query';
import { Search, Trash2 } from 'lucide-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Table from './Table';
import Pagination from './Pagination';
import SearchItem from './SearchItem';
import SearchBarItem from './SearchBarItem';

import {
	getAllCharacters,
	getCharactersById,
	getCharactersByName,
} from '../network';
import { Character } from '../models';
import { Pagination as PaginationEnum } from '../enums';

const Multiselect = () => {
	const [parent] = useAutoAnimate();
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

	const handlePagination = (action: PaginationEnum) => {
		setPage((prev) =>
			1 <= prev + action.valueOf() && 42 >= prev + action.valueOf()
				? prev + action.valueOf()
				: prev
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
		<div className='w-full h-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 p-[25px] lg:px-[50px] gap-[25px] overflow-x-hidden'>
			<div className='w-full h-full max-h-[425px]'>
				{/* Search  */}
				<div className='relative w-full h-auto max-h-[100px] overflow-scroll overflow-x-hidden flex flex-wrap items-center justify-start bg-white rounded-lg p-[15px] pt-0 gap-[10px]'>
					<span
						ref={parent}
						className='sticky bg-white top-0 left-0 w-full h-auto flex items-center justify-between border-b py-[10px]'>
						<span className='w-auto h-auto flex items-center justify-start gap-x-[7.5px]'>
							<Search size={16} />
							<input
								className='w-auto h-auto outline-none text-black'
								placeholder='search (case-sensitive)'
								onChange={(e) => setSearch(e.target.value)}
							/>
						</span>
						{selectedCharacters.length > 0 && (
							<span
								onClick={() => setSelectedCharacters([])}
								className='hover:cursor-pointer w-auto h-auto flex items-center justify-end gap-x-[7.5px] bg-red-500 rounded-md px-[10px] py-[5px]'>
								<p className='relative top-[1.5px] text-[10px] font-bold text-white'>
									Delete tags
								</p>
								<Trash2 size={12} className='text-white' />
							</span>
						)}
					</span>
					{selectedCharacters &&
						selectedCharacters.length > 0 &&
						selectedCharacters.map((item, index) => (
							<SearchBarItem
								onClick={() => handleUnselect(item.character.id)}
								item={item}
								key={index}
							/>
						))}
				</div>
				{/* Search Modal */}
				<div
					ref={parent}
					className='relative w-full h-full overflow-scroll hide-scrollbar bg-white mt-[10px] px-[15px] pb-[15px] pt-[7.5px] rounded-lg items-center justify-center'>
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
			{/* Selected Characters Table */}
			<div className='w-full h-auto max-h-[500px] mt-[100px] lg:mt-0'>
				<Table items={selectedCharactersQuery} />
				{selectedCharacters && selectedCharacters.length > 0 && (
					<div className='w-full h-auto flex items-center justify-start mt-[5px] '>
						<span className='flex items-center justify-center gap-x-[5px] text-[14px] px-[10px] py-[5px] text-black bg-white rounded-md'>
							<p>Selected character(s): </p>
							<p className='font-bold' ref={parent}>
								{selectedCharacters.length}
							</p>
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Multiselect;
