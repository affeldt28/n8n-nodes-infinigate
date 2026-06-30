import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentNumber',
		displayName: 'Document Number',
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
		name: 'documentRevision',
		displayName: 'Document Revision',
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
		name: 'rejectedByUserMail',
		displayName: 'Rejected By User Email',
		type: 'string',
		default: '',
		placeholder: 'e.g. nathan@example.com',
		description: 'The email address of the user who rejected the purchase quote',
		routing: {
			send: {
				type: 'body',
				property: 'rejectedByUserMail',
			},
		},
	},
	{
		name: 'userComments',
		displayName: 'User Comments',
		type: 'string',
		default: '',
		description: 'Comments provided by the user when rejecting the purchase quote',
		routing: {
			send: {
				type: 'body',
				property: 'userComments',
			},
		},
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['reject'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
