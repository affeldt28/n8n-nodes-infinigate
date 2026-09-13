import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		displayName: 'Document Number',
		name: 'documentNumber',
		type: 'string',
		default: '',
		placeholder: 'e.g. documentNumber',
		description: 'The document number of the purchase quote',
		routing: {
			send: {
				type: 'body',
				property: 'documentNumber',
			},
		},
	},
	{
		displayName: 'Document Revision',
		name: 'documentRevision',
		type: 'number',
		default: 0,
		description: 'The document revision of the purchase quote',
		routing: {
			send: {
				type: 'body',
				property: 'documentRevision',
			},
		},
	},
	{
		displayName: 'Accepted By User Email',
		name: 'acceptedByUserMail',
		type: 'string',
		default: '',
		placeholder: 'e.g. nathan@example.com',
		description: 'The email address of the user who accepted the purchase quote',
		routing: {
			send: {
				type: 'body',
				property: 'acceptedByUserMail',
			},
		},
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['acceptance'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
