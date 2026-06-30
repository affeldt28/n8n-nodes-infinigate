import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentNumber',
		displayName: 'Document Number',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. documentNumber',
		description: 'The document number of the purchase quote to retrieve',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['getByDocumentNumber'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
