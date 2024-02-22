import SelectItem from './SelectItem';
import { ISelectedItem } from '../interfaces';

const SelectedSearchItems = ({
	items,
	setItems,
}: {
	items: ISelectedItem[];
	setItems: Function;
}) => {
	return (
		<span className='w-auto h-auto flex items-center justify-center'>
			{items &&
				items.length > 0 &&
				items.map((item) => (
					<SelectItem name={item.name} id={item.id} setItems={setItems} />
				))}
		</span>
	);
};

export default SelectedSearchItems;
