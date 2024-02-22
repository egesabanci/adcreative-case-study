interface ICharacterObject {
	name: string;
	url: string;
}

type Episodes = string[];

interface ICharacter {
	id: string;
	name: string;
	status: string;
	type: string;
	gender: string;
	origin: ICharacterObject;
	location: ICharacterObject;
	image: string;
	episode: Episodes;
	url: string;
	created: string;
}

export class Character {
	character: ICharacter;

	constructor(character: ICharacter) {
		this.character = character;
	}

	getEpisodes(): string[] {
		return this.character.episode.map((item) => new URL(item).pathname.split('/').slice(-1)[0]);
	}
}
