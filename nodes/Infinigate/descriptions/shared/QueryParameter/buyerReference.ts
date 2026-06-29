import { type INodeProperties } from 'n8n-workflow';

export const buyerReferenceQueryParameter: INodeProperties = {
	name: 'BuyerReference',
	displayName: 'BuyerReference',
	type: 'string',
	default: '',
	description: 'Filter for BuyerReference',
	routing: {
		send: {
			type: 'query',
			property: 'BuyerReference',
		},
	},
};
