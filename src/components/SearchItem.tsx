import { Character } from '../models';

const SearchItem = (props: any) => {
	const { character }: Character = props.item;

	return (
		<div
			className='w-full h-auto hover:cursor-pointer flex items-center justify-start p-[15px] gap-x-[15px] border-t border-b'
			{...props}>
			<input type='radio' checked={props.checked} readOnly />
			<img className='w-[64px] h-auto rounded-lg' src={character.image} />
			<span className=''>
				<h1 className='text-lg font-semibold'>{character.name}</h1>
				<p className='text-md'>Episodes: {character.episode.length}</p>
			</span>
		</div>
	);
};

export default SearchItem;
