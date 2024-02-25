import Multiselect from '../components/Multiselect';

const Main = () => {
	return (
		<div className='unselectable w-screen h-auto min-h-screen py-[50px] lg:py-0 bg-[#151515] overflow-x-hidden'>
			<span className='w-full h-auto flex items-center justify-center pt-[35px] px-[35px] lg:px-0 gap-x-[10px]'>
				<img src='/icon.png' className='w-[32px] h-auto rounded-full' />
				<h1 className='text-lg lg:text-2xl font-bold text-white'>
					Rick and Morty | Characters
				</h1>
			</span>
			<Multiselect />
		</div>
	);
};

export default Main;
