import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		displayName: 'Document Number',
		name: 'documentNumber',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. documentNumber',
		description: 'The document number of the purchase credit memo to retrieve',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseCreditMemo'],
		operation: ['getByDocumentNumber'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
