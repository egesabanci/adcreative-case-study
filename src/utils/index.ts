import { network } from '../constants.json';

export const transformEndpoint = (endp: string) => {
	return new URL(endp, network.baseUrl);
};
