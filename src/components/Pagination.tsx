const Pagination = ({
	increment,
	decrement,
	page,
}: {
	increment: Function;
	decrement: Function;
	page: string;
}) => {
	return (
		<span className='w-full h-auto my-[10px] flex gap-x-[15px] items-center justify-center'>
			<p
				onClick={() => decrement()}
				className='text-[16px] hover:cursor-pointer font-bold bg-gray-800 rounded-full text-white px-[10px] py-[5px]'>
				{'<'}
			</p>
			<p>Page: {page.toString()}</p>
			<p
				onClick={() => increment()}
				className='text-[16px] hover:cursor-pointer font-bold bg-gray-800 rounded-full text-white px-[10px] py-[5px]'>
				{'>'}
			</p>
		</span>
	);
};

export default Pagination;
