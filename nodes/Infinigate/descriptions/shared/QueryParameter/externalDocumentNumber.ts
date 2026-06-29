import { type INodeProperties } from 'n8n-workflow';

export const externalDocumentNumberQueryParameter: INodeProperties = {
	name: 'ExternalDocumentNumber',
	displayName: 'ExternalDocumentNumber',
	type: 'string',
	default: '',
	description: 'Filter for ExternalDocumentNumber',
	routing: {
		send: {
			type: 'query',
			property: 'ExternalDocumentNumber',
		},
	},
};
