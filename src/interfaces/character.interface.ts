interface ICharacterObject {
	name: string;
	url: string;
}

export interface ICharacter {
	id: string;
	name: string;
	status: string;
	type: string;
	gender: string;
	origin: ICharacterObject;
	location: ICharacterObject;
	image: string;
	episode: string[];
	url: string;
	created: string;
}
