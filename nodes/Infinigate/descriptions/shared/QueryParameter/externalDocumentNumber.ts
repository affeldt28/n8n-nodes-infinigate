import { type INodeProperties } from 'n8n-workflow';

export const externalDocumentNumberQueryParameter: INodeProperties = {
	displayName: 'External Document Number',
	name: 'ExternalDocumentNumber',
	type: 'string',
	default: '',
	placeholder: 'e.g. externalDocumentNumber',
	description: 'Filter by external document number',
	routing: {
		send: {
			type: 'query',
			property: 'ExternalDocumentNumber',
		},
	},
};
