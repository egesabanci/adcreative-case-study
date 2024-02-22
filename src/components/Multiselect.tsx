import clsx from 'clsx';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Loader2 } from 'lucide-react';

import Table from './Table';
import { getAllCharacters } from '../network';
import { useOutsideClick } from '../hooks/useClickOutside';
import { Character } from '../models';

const Multiselect = () => {
	const [search, setSearch] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

	const handleSelect = (item: Character) => {
		setSelectedCharacters((prev) => [...prev, item]);
	};

	const handleUnselect = (id: string) => {
		setSelectedCharacters((prev) => prev.filter((x) => x.character.id !== id));
	};

	const ref = useOutsideClick(() => {
		setModalOpen(false);
	});

	const { data, isLoading } = useQuery('allCharacters', getAllCharacters);

	return (
		<div className='w-screen lg:w-1/3 px-[25px] lg:px-0 h-auto min-h-[50px] flex flex-col items-center justify-center gap-y-[25px]'>
			<div className='w-full h-auto flex items-center justify-center gap-x-[25px]'>
				<img src='/icon.png' className='w-[64px] h-[64px]' />
				<h1 className='text-white text-3xl font-bold mb-[25px] relative top-[12.5px]'>
					Rick and Morty | Characters
				</h1>
			</div>
			<div className='relative w-full h-full'>
				<div className='relative w-full h-auto max-h-[100px] hide-scrollbar overflow-scroll overflow-x-hidden flex flex-wrap items-center justify-start bg-white rounded-lg p-[15px] gap-[10px]'>
					{selectedCharacters &&
						selectedCharacters.length > 0 &&
						selectedCharacters.map((item) => (
							<h1 onClick={() => handleUnselect(item.character.id)}>
								{item.character.name}
							</h1>
						))}
					<input
						className='w-auto h-auto outline-none text-black'
						placeholder='search'
						onChange={(e) => setSearch(e.target.value)}
						onFocus={() => setModalOpen(true)}
					/>
				</div>
				<span
					ref={ref}
					className={clsx(
						modalOpen ? 'flex' : 'hidden',
						'flex-col w-full h-auto max-h-[200px] overflow-scroll hide-scrollbar bg-gray-100 mt-[10px] absolute rounded-lg shadow-2xl items-center justify-center'
					)}>
					{!isLoading ? (
						data
							?.filter((x) => !selectedCharacters.includes(x))
							.map((item) => (
								<h1 onClick={() => handleSelect(item)}>
									{item.character.name}
								</h1>
							))
					) : (
						<Loader2 className='animate-spin text-black' size={18} />
					)}
				</span>
			</div>

			<Table items={undefined} />
		</div>
	);
};

export default Multiselect;
