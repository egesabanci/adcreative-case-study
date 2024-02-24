import { ChevronLeft, ChevronRight } from 'lucide-react';

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
		<span className='sticky top-0 left-0 bg-gray-800 rounded-md w-full h-auto flex gap-x-[15px] items-center justify-between px-[25px] py-[10px]'>
			<p
				onClick={() => decrement()}
				className='text-[16px] hover:cursor-pointer font-bold bg-gray-100 rounded-full text-black p-[5px]'>
				<ChevronLeft />
			</p>
			<p className='text-gray-400'>
				Page:{' '}
				<span className='font-bold text-white text-lg'>{page.toString()}</span>
			</p>
			<p
				onClick={() => increment()}
				className='text-[16px] hover:cursor-pointer font-bold bg-gray-100 rounded-full text-black p-[5px]'>
				<ChevronRight />
			</p>
		</span>
	);
};

export default Pagination;
