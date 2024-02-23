const SearchBarItem = (props: any) => {
	return (
		<div
			{...props}
			className='px-[10px] py-[5px] text-[12px] hover:cursor-pointer rounded-md bg-gray-100 flex gap-x-[5px]'>
			<p>{props.item.character.name}</p>
			<p className='font-bold text-red-500'>X</p>
		</div>
	);
};

export default SearchBarItem;
