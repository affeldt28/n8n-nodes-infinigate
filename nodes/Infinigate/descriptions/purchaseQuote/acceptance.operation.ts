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
		name: 'acceptedByUserMail',
		displayName: 'Accepted By User Mail',
		type: 'string',
		default: '',
		description: 'The email of the user who accepted the purchase quote.',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['acceptance'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
