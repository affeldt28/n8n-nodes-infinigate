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
		displayName: 'Rejected By User Email',
		name: 'rejectedByUserMail',
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
		displayName: 'User Comments',
		name: 'userComments',
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
