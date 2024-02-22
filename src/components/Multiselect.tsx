import { useEffect } from 'react';
import { getAllCharacters, getCharacters } from '../network';

const Multiselect = () => {
	useEffect(() => {
		const request = async () => await getAllCharacters();
		request();
	}, []);

	return <></>;
};

export default Multiselect;
