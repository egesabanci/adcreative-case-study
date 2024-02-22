import { ICharacter } from '../interfaces/character.interface';

export class Character {
	character: ICharacter;

	constructor(character: ICharacter) {
		this.character = character;
	}

	getEpisodes(): string[] {
		return this.character.episode.map(
			(item) => new URL(item).pathname.split('/').slice(-1)[0]
		);
	}
}
