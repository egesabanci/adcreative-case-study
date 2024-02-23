import clsx from 'clsx';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Loader2 } from 'lucide-react';

import Table from './Table';
import { Character } from '../models';
import Pagination from './Pagination';
import SearchItem from './SearchItem';
import SearchBarItem from './SearchBarItem';
import { getAllCharacters, getCharactersById } from '../network';
import { Pagination as PaginationEnum } from '../enums';
import { useOutsideClick } from '../hooks/useClickOutside';

const Multiselect = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
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

	const ref = useOutsideClick(() => {
		setModalOpen(false);
	});

	const allCharactersQuery = useQuery(['allCharacters', page], () =>
		getAllCharacters(page.toString())
	);

	const selectedCharactersQuery = useQuery(
		['selectedCharacters', selectedCharacters],
		() => getCharactersById(selectedCharacters.map((item) => item.character.id))
	);

	return (
		<div className='w-screen h-screen grid grid-cols-2 align-center items-center px-[25px] lg:px-[150px] py-[25px] lg:py-[100px]'>
			<div className='w-full h-full'>
				{/* Input  */}
				<div className='w-full h-auto max-h-[100px] hide-scrollbar overflow-scroll overflow-x-hidden flex flex-wrap items-center justify-start bg-white rounded-lg p-[15px] gap-[10px]'>
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
						onClick={() => setModalOpen(true)}
						onChange={(e) => setSearch(e.target.value)}
						onFocus={() => setModalOpen(true)}
					/>
				</div>

				{/* Modal */}
				<span
					ref={ref}
					className={clsx(
						modalOpen ? 'flex' : 'hidden',
						'flex-col w-full h-full overflow-scroll hide-scrollbar bg-gray-100 mt-[10px] rounded-lg shadow-2xl items-center justify-center'
					)}>
					{!allCharactersQuery.isLoading ? (
						<>
							<Pagination
								increment={() => handlePagination(PaginationEnum.INCREMENT)}
								decrement={() => handlePagination(PaginationEnum.DECREMENT)}
								page={page.toString()}
							/>
							{allCharactersQuery.data?.map((item, index) => (
								<SearchItem
									onClick={() => handleSelect(item)}
									item={item}
									key={index}
									checked={selectedCharacters
										.map((selected) => selected.character.id)
										.includes(item.character.id)}
								/>
							))}
						</>
					) : (
						<Loader2 className='animate-spin text-black' size={18} />
					)}
				</span>
			</div>

			<Table items={selectedCharactersQuery} />
		</div>
	);
};

export default Multiselect;
