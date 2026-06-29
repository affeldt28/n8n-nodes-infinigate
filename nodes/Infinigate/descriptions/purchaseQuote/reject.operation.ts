import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentNumber',
		displayName: 'Document Number',
		type: 'string',
		default: '',
		description: 'The document number of the purchase quote.',
	},
	{
		name: 'documentRevision',
		displayName: 'Document Revision',
		type: 'number',
		default: 0,
		description: 'The document revision of the purchase quote.',
	},
	{
		name: 'rejectedByUserMail',
		displayName: 'Rejected By User Mail',
		type: 'string',
		default: '',
		description: 'The email of the user who rejected the purchase quote.',
	},
	{
		name: 'userComments',
		displayName: 'User Comments',
		type: 'string',
		default: '',
		description: 'Comments provided by the user when rejecting the purchase quote.',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['reject'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
