import clsx from 'clsx';
import { Character } from '../models';

const SearchItem = (props: any) => {
	const { character }: Character = props.item;
	const replacePattern = new RegExp(props.search, 'g');

	return (
		<div
			className={clsx(
				props.checked ? 'border-none bg-gray-200 text-black' : 'bg-white',
				'w-full h-auto hover:cursor-pointer flex items-center justify-start my-[5px] p-[15px] gap-x-[15px] border rounded-md'
			)}
			{...props}>
			<img className='w-[64px] h-auto rounded-lg' src={character.image} />
			<span className='w-auto h-auto'>
				<h1
					className='text-lg font-regular'
					dangerouslySetInnerHTML={{
						__html: character.name.replace(
							replacePattern,
							`<span style = "font-weight: 800">${props.search}</span>`
						),
					}}></h1>
				<p className='text-[12px] text-black font-medium'>
					Episodes:{' '}
					<span className='bg-black font-bold text-white px-[5px] py-[2.5px] rounded-full'>
						{character.episode.length}
					</span>
				</p>
			</span>
		</div>
	);
};

export default SearchItem;
