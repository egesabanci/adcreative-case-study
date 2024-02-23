import clsx from 'clsx';
import { Character } from '../models';

const SelectedItem = (props: any) => {
	const item: Character = props.item;

	return (
		<div
			key={props.key}
			className='w-full h-auto flex items-center justify-center p-[15px] gap-[15px] border-t border-b'>
			<img className='w-[72px] h-auto rounded-lg' src={item.character.image} />
			<span className='w-full h-auto flex flex-col items-start justify-center'>
				<span className='flex items-center justify-start gap-x-[5px] mb-[5px]'>
					<h1 className='text-[18px] font-bold'>{item.character.name}</h1>
					<p className='text-[12px] text-gray-400'>({item.character.status})</p>
				</span>
				<div className='flex items-end justify-start gap-[5px] flex-wrap'>
					<span
						className={clsx(
							item.character.gender === 'Male'
								? 'bg-blue-300'
								: item.character.gender === 'Female'
								? 'bg-pink-300'
								: 'bg-slate-500',
							'px-[7.5px] py-[2.5px] rounded-md'
						)}>
						<p className='text-[10px] font-semibold text-white'>
							{item.character.gender}
						</p>
					</span>
					<span className='bg-gray-200 px-[7.5px] py-[2.5px] rounded-md'>
						<p className='text-[10px] text-black'>
							Episodes:{' '}
							<span className='font-semibold'>{item.getEpisodes().length}</span>
						</p>
					</span>
					<span className='rounded-md bg-teal-600 px-[7.5px] py-[2.5px]'>
						<p className='text-[10px] text-white'>
							Location:{' '}
							<span className='font-semibold'>
								{item.character.location.name}
							</span>
						</p>
					</span>
					{item.character.origin.name && item.character.origin.name !== '' && (
						<span className='rounded-md bg-amber-500 px-[7.5px] py-[2.5px]'>
							<p className='text-[10px] text-white'>
								Origin:{' '}
								<span className='font-semibold'>
									{item.character.origin.name}
								</span>
							</p>
						</span>
					)}
					{item.character.type && item.character.type !== '' && (
						<span className='rounded-md bg-indigo-500 px-[7.5px] py-[2.5px]'>
							<p className='text-[10px] text-white'>
								Type:{' '}
								<span className='font-semibold'>{item.character.type}</span>
							</p>
						</span>
					)}
				</div>
			</span>
		</div>
	);
};

export default SelectedItem;
