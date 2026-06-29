import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentNumber',
		displayName: 'Document Number',
		type: 'string',
		default: '',
		required: true,
		description: 'The documentNumber of the PurchaseInvoice to retrieve',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseInvoice'],
		operation: ['getByDocumentNumber'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
