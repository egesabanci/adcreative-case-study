import axios from 'axios';

import { endp } from '../constants.json';
import { transformEndpoint, mapToClass } from '../utils';

import { Character } from '../models';
import { ICharacter } from '../interfaces';

export const getAllCharacters = async (): Promise<Character[]> => {
	const url = transformEndpoint(endp.characters);
	const req = await axios.get(url.toString());

	return mapToClass(req.data.results as ICharacter[]);
};

export const getCharacters = async (ids: string[]): Promise<Character[]> => {
	const param = `[${ids.join(',')}]`;
	const url = transformEndpoint(endp.characters + param);
	const req = await axios.get(url.toString());

	return mapToClass(req.data as ICharacter[]);
};
