import { Character } from '../models';
import { ICharacter } from '../interfaces';
import { network } from '../constants.json';

export const transformEndpoint = (endp: string) => {
	return new URL(endp, network.baseUrl);
};

export const mapToClass = (results: ICharacter[]): Character[] => {
	return results.map((item: ICharacter) => new Character(item));
};
