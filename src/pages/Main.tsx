import Multiselect from '../components/Multiselect';

const Main = () => {
	return (
		<div className='unselectable w-screen h-auto min-h-screen bg-[#151515] overflow-x-hidden'>
			<span className='w-full h-auto flex items-center justify-center pt-[35px]'>
				<h1 className='text-2xl font-bold text-white'>
					Rick and Morty | Characters
				</h1>
			</span>
			<Multiselect />
		</div>
	);
};

export default Main;
