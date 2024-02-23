import { Character } from '../models';

const SearchItem = (props: any) => {
	const { character }: Character = props.item;
	const replacePattern = new RegExp(props.search, 'g');

	return (
		<div
			className='w-full h-auto hover:cursor-pointer flex items-center justify-start p-[15px] gap-x-[15px] border-t border-b'
			{...props}>
			<input type='radio' checked={props.checked} readOnly />
			<img className='w-[64px] h-auto rounded-lg' src={character.image} />
			<span className=''>
				<h1
					className='text-lg'
					dangerouslySetInnerHTML={{
						__html: character.name
							.toLowerCase()
							.replace(
								replacePattern,
								`<span style = "font-weight: 700">${props.search}</span>`
							),
					}}></h1>
				<p className='text-md'>Episodes: {character.episode.length}</p>
			</span>
		</div>
	);
};

export default SearchItem;
