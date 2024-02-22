import { ISelectedItem } from '../interfaces';

const SelectItem = ({
	name,
	id,
	setItems,
}: {
	name: string;
	id: string;
	setItems: Function;
}) => {
	const handleRemove = (id: string) => {
		setItems((prevState: ISelectedItem[]) =>
			prevState.filter((x) => x.id !== id)
		);
	};

	return (
		<span
			onClick={() => handleRemove(id)}
			className='w-auto h-auto px-[10px] py-[5px] hover:cursor-pointer flex items-center justify-center bg-gray-200 text-[12px] rounded-md'>
			{name}
		</span>
	);
};

export default SelectItem;
