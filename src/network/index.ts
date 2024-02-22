import axios from 'axios';
import { plainToInstance } from 'class-transformer';

import { endp } from '../constants.json';
import { transformEndpoint } from '../utils';

import { Character } from '../models';
import { ICharacter } from '../interfaces';

export const getAllCharacters = async (): Promise<Character[]> => {
	const url = transformEndpoint(endp.characters);
	const res = await axios.get(url.toString());

	return res.data.results.map(
		(item: any) => new Character(item as ICharacter)
	);
};
