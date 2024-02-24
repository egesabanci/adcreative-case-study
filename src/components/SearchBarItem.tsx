import { X } from 'lucide-react';

const SearchBarItem = (props: any) => {
	return (
		<div
			{...props}
			className='px-[10px] py-[5px] text-[12px] hover:cursor-pointer rounded-md bg-gray-100 flex items-center justify-center gap-x-[10px]'>
			<p>{props.item.character.name}</p>
			<p className='font-bold text-red-500'>
				<X size={16} />
			</p>
		</div>
	);
};

export default SearchBarItem;
