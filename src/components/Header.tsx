const Header = () => {
	return (
		<div className='w-full h-auto flex items-center justify-center gap-x-[25px]'>
			<img src='/icon.png' className='w-[64px] h-[64px]' />
			<h1 className='text-white text-3xl font-bold mb-[25px] relative top-[12.5px]'>
				Rick and Morty | Characters
			</h1>
		</div>
	);
};

export default Header;
